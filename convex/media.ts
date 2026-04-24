import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getPublished = query({
  args: {},
  handler: async (ctx) => {
    const entries = await ctx.db
      .query("mediaEntries")
      .order("desc")
      .collect();
    
    return await Promise.all(
      entries.map(async (entry) => {
        return {
          ...entry,
          coverImageUrl: entry.coverImage ? await ctx.storage.getUrl(entry.coverImage) : undefined,
        };
      })
    );
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const entry = await ctx.db
      .query("mediaEntries")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
    if (!entry) return null;
    return {
      ...entry,
      coverImageUrl: entry.coverImage ? await ctx.storage.getUrl(entry.coverImage) : undefined,
    };
  },
});

export const getFeatured = query({
  args: { count: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.count ?? 3;
    // Try featured items first
    const featured = await ctx.db
      .query("mediaEntries")
      .filter((q) => q.eq(q.field("isFeatured"), true))
      .order("desc")
      .take(limit);
      
    let results = featured;
    if (results.length === 0) {
      // Fallback: return most recent entries
      results = await ctx.db.query("mediaEntries").order("desc").take(limit);
    }
    
    return await Promise.all(
      results.map(async (entry) => {
        return {
          ...entry,
          coverImageUrl: entry.coverImage ? await ctx.storage.getUrl(entry.coverImage) : undefined,
        };
      })
    );
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const getUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const addMedia = mutation({
  args: {
    title: v.string(),
    type: v.union(v.literal("academic"), v.literal("press"), v.literal("interview"), v.literal("other")),
    outlet: v.string(),
    date: v.string(),
    description: v.string(),
    coverImage: v.optional(v.string()),
    mediaUrl: v.optional(v.string()),
    externalLink: v.optional(v.string()),
    isFeatured: v.optional(v.boolean()),
    author: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("mediaEntries", {
      ...args,
      slug: args.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
    });
  },
});

export const updateMedia = mutation({
  args: {
    id: v.id("mediaEntries"),
    title: v.optional(v.string()),
    type: v.optional(v.union(v.literal("academic"), v.literal("press"), v.literal("interview"), v.literal("other"))),
    outlet: v.optional(v.string()),
    date: v.optional(v.string()),
    description: v.optional(v.string()),
    content: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    mediaUrl: v.optional(v.string()),
    externalLink: v.optional(v.string()),
    isFeatured: v.optional(v.boolean()),
    author: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...patch } = args;
    
    const updates: any = { ...patch };
    if (patch.title) {
      updates.slug = patch.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    }
    
    await ctx.db.patch(id, updates);
  },
});

export const deleteMedia = mutation({
  args: { id: v.id("mediaEntries") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const getUnifiedFeed = query({
  args: {},
  handler: async (ctx) => {
    const ideas = await ctx.db
      .query("ideas")
      .withIndex("by_status", (q) => q.eq("status", "published"))
      .order("desc")
      .collect();

    const media = await ctx.db
      .query("mediaEntries")
      .order("desc")
      .collect();

    const unifiedIdeas = await Promise.all(
      ideas.map(async (idea) => ({
        _id: idea._id,
        type: "reflection",
        category: idea.category || "Reflection",
        title: idea.title,
        slug: idea.slug,
        date: new Date(idea._creationTime).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        excerpt: idea.excerpt,
        thumbnailUrl: idea.coverImage ? await ctx.storage.getUrl(idea.coverImage) : undefined,
        href: `/ideas/${idea.slug}`,
      }))
    );

    const unifiedMedia = await Promise.all(
      media.map(async (entry) => ({
        _id: entry._id,
        type: "media",
        category: entry.type,
        title: entry.title,
        slug: entry.slug,
        date: entry.date,
        excerpt: entry.description,
        thumbnailUrl: entry.thumbnailUrl || (entry.coverImage ? await ctx.storage.getUrl(entry.coverImage) : undefined),
        href: `/media/${entry.slug}`,
        outlet: entry.outlet,
      }))
    );

    // Combine and sort by date (fallback to creation time if needed)
    return [...unifiedIdeas, ...unifiedMedia].sort((a, b) => {
        const dateA = new Date(a.date).getTime() || 0;
        const dateB = new Date(b.date).getTime() || 0;
        return dateB - dateA;
    });
  },
});

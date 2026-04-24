import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Membership
export const join = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    country: v.string(),
    role: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("community_members")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) {
      return existing._id;
    }

    return await ctx.db.insert("community_members", {
      ...args,
      tier: "member",
      joinedAt: Date.now(),
      status: "active",
    });
  },
});

export const getMemberCount = query({
  handler: async (ctx) => {
    const members = await ctx.db.query("community_members").collect();
    return members.length;
  },
});

// Mentors
export const getFeaturedMentors = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("mentors")
      .withIndex("by_featured", (q) => q.eq("isFeatured", true))
      .collect();
  },
});

export const getAllMentors = query({
  handler: async (ctx) => {
    return await ctx.db.query("mentors").collect();
  },
});

// Sessions
export const getUpcomingSessions = query({
  handler: async (ctx) => {
    return await ctx.db.query("nguvu_sessions").order("desc").take(5);
  },
});

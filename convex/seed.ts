import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedDatabase = mutation({
  handler: async (ctx) => {
    // 1. Seed Hero Settings
    await ctx.db.insert("siteSettings", {
      key: "hero",
      value: {
        title: "Leading a Generation of <br /> <span class=\"text-gold italic\">Women Forward</span>.",
        name: "Jokate Mwegelo",
        description: "Official platform of Jokate Mwegelo. Built to shape the future of leadership, impact, and modern femininity in Tanzania and beyond.",
        primaryCta: { label: "Explore Her Work", href: "/impact" },
        secondaryCta: { label: "Support the Mission", href: "/get-involved" },
        mandate: "Leader. Builder. Advocate.",
        posting: "Dar es Salaam, Tanzania"
      }
    });

    // 2. Seed Initial Quote
    await ctx.db.insert("quotes", {
      text: "When we step into spaces that were not built for us, we don't just occupy room—we expand the horizons for those who follow.",
      author: "Jokate Mwegelo",
      source: "Leadership Reflection",
      isFeatured: true,
      publishedAt: Date.now(),
    });

    // 3. Seed Milestones
    const milestones = [
      {
        year: "2018—2021",
        role: "District Commissioner",
        organization: "Kisarawe District",
        description: "Appointed as one of the youngest District Commissioners. Spearheaded the 'Tokomeza Zero' campaign to eradicate zero divisions in secondary schools.",
        highlights: ["Tokomeza Zero Campaign", "Education Infrastructure"],
        order: 0
      },
      {
        year: "2012—Present",
        role: "Founder & CEO",
        organization: "Kidoti Loving",
        description: "Founded an entrepreneurial venture focused on empowering the youth through affordable lifestyle brands and community initiatives.",
        highlights: ["Youth Empowerment", "Entrepreneurial Excellence"],
        order: 1
      }
    ];

    for (const m of milestones) {
      await ctx.db.insert("milestones", m);
    }

    // 4. Seed Initial Book
    await ctx.db.insert("books", {
      title: "Becoming: A Message for the Next Generation",
      slug: "becoming-next-generation",
      description: "A book for the girl who is still becoming. A message she will carry for life.",
      content: "In this deeply personal and reflective book, Jokate Mwegelo shares the lessons of her journey—from the spotlight of media to the rigorous demands of public service...",
      thumbnailUrl: "/images/jokate-book-thumb.png",
      purchaseLinks: [
        { label: "Sponsor a Copy", url: "/get-involved" },
        { label: "Order Hardcover", url: "#" }
      ],
      publishedAt: Date.now(),
      isFeatured: true
    });

    return "Database seeded successfully";
  }
});

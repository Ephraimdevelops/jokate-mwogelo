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

    // 5. Seed Demo Reflections
    const demoIdeas = [
      {
        title: "The Architecture of Karama: Leading with Dignity",
        slug: "architecture-of-karama",
        excerpt: "Exploring the intersection of tradition, modern leadership, and the preservation of human dignity in public service.",
        content: "<p>Dignity is not merely a personal trait; it is the foundation of any enduring leadership. In my years of public service, I have seen how the architecture of 'Karama' (Dignity) shapes the way we interact with our communities...</p>",
        category: "Leadership",
        tags: ["Leadership", "Values"],
        status: "published" as const,
        isFeatured: true,
      },
      {
        title: "Diplomacy in Action: Building Bridges Across Borders",
        slug: "diplomacy-in-action",
        excerpt: "Reflections on the role of cultural exchange and strategic communication in modern international relations.",
        content: "<p>International relations today require more than just official protocols. They require a deep understanding of human connection and cultural resonance...</p>",
        category: "Diplomacy",
        tags: ["Diplomacy", "Reflections"],
        status: "published" as const,
        isFeatured: false,
      },
      {
        title: "Empowering the Next Generation of Women Leaders",
        slug: "empowering-women-leaders",
        excerpt: "A call to action for young women to step into leadership roles and redefine the future of our continent.",
        content: "<p>The future of Africa depends on the inclusion of its daughters. When we empower women, we empower entire nations. My journey has taught me that no space is off-limits...</p>",
        category: "Empowerment",
        tags: ["Women", "Impact"],
        status: "published" as const,
        isFeatured: true,
      }
    ];

    let user = await ctx.db.query("users").first();
    if (!user) {
      const userId = await ctx.db.insert("users", {
        name: "Jokate Mwegelo",
        email: "admin@jokatemwegelo.com",
        role: "super_admin",
      });
      user = await ctx.db.get(userId);
    }

    for (const idea of demoIdeas) {
      await ctx.db.insert("ideas", {
        ...idea,
        authorId: user!._id,
        publishedAt: Date.now(),
      });
    }

    // 6. Seed Initial Mentors
    const initialMentors = [
      {
        name: "Dr. Tulia Ackson",
        title: "Speaker of the National Assembly",
        organization: "United Republic of Tanzania",
        sector: "Governance",
        bio: "Champion of legislative excellence and women's political empowerment.",
        isFeatured: true,
      },
      {
        name: "Faraja Nyalandu",
        title: "Founder & Executive Director",
        organization: "Shule Direct",
        sector: "Education Technology",
        bio: "Leading the digital transformation of education in East Africa.",
        isFeatured: true,
      },
      {
        name: "Jennifer Bash",
        title: "CEO",
        organization: "Alaska Tanzania",
        sector: "Agribusiness",
        bio: "Strategic leader in food security and value-chain development.",
        isFeatured: true,
      }
    ];

    for (const mentor of initialMentors) {
      await ctx.db.insert("mentors", mentor);
    }

    return "Database seeded successfully with demo posts and mentors";
  }
});

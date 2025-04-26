// Sample dummy data for news articles
const articles = [
  {
    id: 1,
    title: "Unrecognized genius",
    description:
      "Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.Rising star Alexandra’s new work causes a lot of controversy in creative circles. According to the artist, the picture illustrates a state of horror.",
    content:
      "Full article content for Unrecognized genius... (add more here)",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    category: "Arts",
    author: "Wade Warren",
    time: "16h ago"
  },
  {
    id: 2,
    title: "Museum of Modern Art completed in London",
    description:
      "On March 10, 2022, the Museum of Modern Art opened in London. More than 53,000 people have already booked tickets to the museum...",
    content:
      "Full article content for Museum of Modern Art completed in London... (add more here)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Arts",
    author: "Robert Fox",
    time: "5h ago"
  },
  {
    id: 3,
    title: "Installation per million",
    description:
      "During the first two days of the exhibition, Pierre was visited by more than 30,000 people. The artist did not expect that his installation would arouse such interest...",
    content:
      "Full article content for Installation per million... (add more here)",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Arts",
    author: "Pierre Martin",
    time: "10h ago"
  },
  {
    id: 4,
    title: "Tech stocks rally after earnings",
    description: "Tech sector sees a sharp rise after positive earnings reports.",
    content: "Full article content for Tech stocks rally after earnings...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    category: "Tech",
    author: "Jane Doe",
    time: "2h ago"
  },
  {
    id: 5,
    title: "Business leaders meet in Davos",
    description: "Global business leaders gather to discuss the future of work.",
    content: "Full article content for Business leaders meet in Davos...",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
    category: "Business",
    author: "John Smith",
    time: "3h ago"
  },
  {
    id: 6,
    title: "Championship game draws record viewers",
    description: "The sports world is abuzz after a thrilling championship game.",
    content: "Full article content for Championship game draws record viewers...",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    category: "Sports",
    author: "Alex Green",
    time: "6h ago"
  },
  {
    id: 7,
    title: "Breakthrough in Quantum Computing",
    description: "Researchers achieve a new milestone in quantum computing, promising faster processing speeds.",
    content: "Full article content for Breakthrough in Quantum Computing... (add more here)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    category: "Tech",
    author: "Samantha Lee",
    time: "1h ago"
  },
  {
    id: 8,
    title: "Startup raises $100M in Series B",
    description: "A tech startup secures major funding to expand its AI-powered platform.",
    content: "Full article content for Startup raises $100M in Series B... (add more here)",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "Tech",
    author: "David Kim",
    time: "30m ago"
  },
  {
    id: 9,
    title: "Mergers shake up global markets",
    description: "Several high-profile mergers are impacting business strategies worldwide.",
    content: "Full article content for Mergers shake up global markets... (add more here)",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    category: "Business",
    author: "Linda Perez",
    time: "5h ago"
  },
  {
    id: 10,
    title: "Sustainable investing on the rise",
    description: "Investors are increasingly focused on sustainability and ESG factors.",
    content: "Full article content for Sustainable investing on the rise... (add more here)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Business",
    author: "Michael Brown",
    time: "8h ago"
  },
  {
    id: 11,
    title: "Olympic hopeful sets new record",
    description: "A young athlete breaks a national record ahead of the Olympic Games.",
    content: "Full article content for Olympic hopeful sets new record... (add more here)",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    category: "Sports",
    author: "Chris Young",
    time: "4h ago"
  },
  {
    id: 12,
    title: "Art fair draws international crowd",
    description: "Collectors and enthusiasts gather for the annual international art fair.",
    content: "Full article content for Art fair draws international crowd... (add more here)",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Arts",
    author: "Emily Carter",
    time: "7h ago"
  },
  {
    id: 13,
    title: "Mars Rover Discovers Signs of Water",
    description: "NASA's Mars rover has found new evidence suggesting the presence of water on the red planet.",
    content: "Full article content for Mars Rover Discovers Signs of Water... (add more here)",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
    category: "Science",
    author: "Dr. Lisa Ray",
    time: "2h ago"
  },
  {
    id: 14,
    title: "Breakthrough in Cancer Research",
    description: "Scientists announce a major breakthrough in cancer treatment methods.",
    content: "Full article content for Breakthrough in Cancer Research... (add more here)",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
    category: "Health",
    author: "Dr. Alan Smith",
    time: "3h ago"
  },
  {
    id: 15,
    title: "Healthy Eating Trends in 2025",
    description: "Nutritionists share the top healthy eating trends for the year.",
    content: "Full article content for Healthy Eating Trends in 2025... (add more here)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    category: "Health",
    author: "Sarah Lee",
    time: "5h ago"
  },
  {
    id: 16,
    title: "National Team Wins Gold",
    description: "The national team secures a gold medal in the international sports championship.",
    content: "Full article content for National Team Wins Gold... (add more here)",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    category: "Sports",
    author: "Maria Gomez",
    time: "1h ago"
  },
  {
    id: 17,
    title: "Record-Breaking Marathon Run",
    description: "An athlete breaks the world record in the annual city marathon.",
    content: "Full article content for Record-Breaking Marathon Run... (add more here)",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    category: "Sports",
    author: "Tom Hanks",
    time: "40m ago"
  },
  {
    id: 18,
    title: "Election Results Spark Nationwide Debate",
    description: "Recent election results have led to widespread discussions and debates across the country.",
    content: "Full article content for Election Results Spark Nationwide Debate... (add more here)",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80",
    category: "Politics",
    author: "Priya Sharma",
    time: "2h ago"
  },
  {
    id: 19,
    title: "New Policy Reforms Announced by Government",
    description: "The government has announced a series of new policy reforms aimed at economic growth.",
    content: "Full article content for New Policy Reforms Announced by Government... (add more here)",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "Politics",
    author: "Amit Desai",
    time: "4h ago"
  },
];

export default articles;

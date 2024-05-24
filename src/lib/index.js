const navRouting = [
    {name:'Explore', route: '/explore'},
    {name:'Stats', route: '/stats'},
    {name:'Create', route: '/create'}
]

const TrendingCard = [
    {
        src: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Anisha Varma",
        rank: "#1204",
        floorPrice: '1.3ETH',
        volume: "10.2k",
        sales: "543"
    },
    {
        src: "https://images.pexels.com/photos/7860674/pexels-photo-7860674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "John Doe",
        rank: "#789",
        floorPrice: '0.8ETH',
        volume: "15.7k",
        sales: "732"
    },
    {
        src: "https://images.pexels.com/photos/23437027/pexels-photo-23437027/free-photo-of-a-white-bird-with-a-long-beak-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Alice Smith",
        rank: "#332",
        floorPrice: '2.1ETH',
        volume: "8.4k",
        sales: "621"
    },
    {
        src: "https://images.pexels.com/photos/10311994/pexels-photo-10311994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Bob Johnson",
        rank: "#1602",
        floorPrice: '0.5ETH',
        volume: "12.3k",
        sales: "498"
    },
    {
        src: "https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Emily Wang",
        rank: "#215",
        floorPrice: '1.9ETH',
        volume: "6.8k",
        sales: "387"
    },
    {
        src: "https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "David Lee",
        rank: "#1001",
        floorPrice: '1.2ETH',
        volume: "9.5k",
        sales: "543"
    },
    {
        src: "https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Samantha Jones",
        rank: "#433",
        floorPrice: '1.5ETH',
        volume: "11.1k",
        sales: "654"
    },
    {
        src: "https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Michael Brown",
        rank: "#876",
        floorPrice: '0.7ETH',
        volume: "7.6k",
        sales: "432"
    },
    {
        src: "https://images.pexels.com/photos/5641225/pexels-photo-5641225.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Sophia Garcia",
        rank: "#209",
        floorPrice: '1.8ETH',
        volume: "14.2k",
        sales: "789"
    },
    {
        src: "https://images.pexels.com/photos/14942101/pexels-photo-14942101.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "William Martinez",
        rank: "#1783",
        floorPrice: '0.4ETH',
        volume: "5.3k",
        sales: "345"
    }
];

const Top10Data = [
    {
        src: "https://images.pexels.com/photos/20106383/pexels-photo-20106383/free-photo-of-hands-holding-a-matcha-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Elijah Rodriguez",
        rank: "#217",
        floorPrice: '1.5ETH',
        volume: "11.8k",
        sales: "627"
    },
    {
        src: "https://images.pexels.com/photos/23371092/pexels-photo-23371092/free-photo-of-leather-purse-and-a-car-key-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Ava Foster",
        rank: "#742",
        floorPrice: '0.9ETH',
        volume: "8.3k",
        sales: "451"
    },
    {
        src: "https://images.pexels.com/photos/23371092/pexels-photo-23371092/free-photo-of-leather-purse-and-a-car-key-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Oscar Young",
        rank: "#310",
        floorPrice: '2.3ETH',
        volume: "14.6k",
        sales: "872"
    },
    {
        src: "https://images.pexels.com/photos/20099425/pexels-photo-20099425/free-photo-of-waterlilies-in-the-pond.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Emma Patel",
        rank: "#1490",
        floorPrice: '0.7ETH',
        volume: "5.9k",
        sales: "378"
    },
    {
        src: "https://images.pexels.com/photos/20099425/pexels-photo-20099425/free-photo-of-waterlilies-in-the-pond.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Noah Nguyen",
        rank: "#931",
        floorPrice: '1.8ETH',
        volume: "9.7k",
        sales: "593"
    },
    {
        src: "https://images.pexels.com/photos/20107094/pexels-photo-20107094/free-photo-of-woman-lying-on-the-floor-among-open-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sophie Brown",
        rank: "#187",
        floorPrice: '1.2ETH',
        volume: "12.2k",
        sales: "724"
    },
    {
        src: "https://images.pexels.com/photos/20107094/pexels-photo-20107094/free-photo-of-woman-lying-on-the-floor-among-open-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Mason Jackson",
        rank: "#524",
        floorPrice: '1.6ETH',
        volume: "6.5k",
        sales: "429"
    },
    {
        src: "https://images.pexels.com/photos/20107094/pexels-photo-20107094/free-photo-of-woman-lying-on-the-floor-among-open-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Isabella White",
        rank: "#879",
        floorPrice: '0.6ETH',
        volume: "8.9k",
        sales: "512"
    },
    {
        src: "https://images.pexels.com/photos/20087799/pexels-photo-20087799/free-photo-of-close-up-of-a-green-lizard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "William Lopez",
        rank: "#337",
        floorPrice: '2.0ETH',
        volume: "10.3k",
        sales: "658"
    },
    {
        src: "https://images.pexels.com/photos/20100232/pexels-photo-20100232/free-photo-of-a-bicycle-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Aria Garcia",
        rank: "#649",
        floorPrice: '0.8ETH',
        volume: "7.4k",
        sales: "492"
    }
];


export {navRouting, TrendingCard, Top10Data}
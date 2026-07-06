<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Great design is invisible - Landing Page</title>
    
    <!-- Favicon -->
    <link rel="icon" href="image/logo.png" type="image/png">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght=0,300..800;1,300..800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- React and ReactDOM CDNs -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
    
    <!-- Babel CDN (React JSX कोड को ब्राउज़र के समझने लायक बनाने के लिए) -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <style>
        html { scroll-behavior: smooth; }
        .wireframe-bg {
            position: relative;
            background-color: #e5e7eb;
            overflow: hidden;
        }
        .wireframe-bg::before, .wireframe-bg::after {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border: 1px dashed rgba(0,0,0,0.08);
            pointer-events: none;
            z-index: 10;
        }
        .wireframe-bg::before { transform: skewX(0deg) rotate(45deg) scale(3); }
        .wireframe-bg::after { transform: skewX(0deg) rotate(-45deg) scale(3); }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * 4)); }
        }
        .slider-track {
            display: flex;
            width: calc(250px * 8);
            animation: scroll 25s linear infinite;
        }
        .slider-track:hover { animation-play-state: paused; }
    </style>
</head>
<body>

    <!-- इसी div के अंदर React App रेंडर होगी -->
    <div id="root"></div>

    <!-- ध्यान दें: यहाँ type="text/babel" लिखना ज़रूरी है -->
    <script type="text/babel">
        const { useState, useEffect } = React;

        function App() {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [openFaq, setOpenFaq] = useState(0);
            const [currentIndex, setCurrentIndex] = useState(0);
            const [cardsPerView, setCardsPerView] = useState(window.innerWidth >= 640 ? 2 : 1);

            const testimonials = [
                {
                    text: '"Working with this design framework was an absolute transition game-changer. Our retention skyrocketed by 40% in two quarters."',
                    name: 'Sarah Jenkins',
                    role: 'Product Lead, TechStart',
                    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&auto=format'
                },
                {
                    text: '"Working with this design framework was an absolute transition game-changer. Our retention skyrocketed by 40% in two quarters."',
                    name: 'Sarah Jenkins',
                    role: 'Product Lead, TechStart',
                    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&auto=format'
                },
                {
                    text: '"The structural clarity is immaculate. Our non-technical users find it completely intuitive. Outstanding ongoing developer collaboration."',
                    name: 'Marcus Vance',
                    role: 'CTO, E-Shop Global',
                    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&auto=format'
                },
                {
                    text: '"Incredible response rates and brilliant design layout elements. They converted our wireframe concepts flawlessly into fluid web code sheets."',
                    name: 'David Miller',
                    role: 'Founder, AlphaMedia',
                    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&auto=format'
                }
            ];

            const maxIndex = Math.max(0, testimonials.length - cardsPerView);

            useEffect(() => {
                const handleResize = () => {
                    const view = window.innerWidth >= 640 ? 2 : 1;
                    setCardsPerView(view);
                };
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }, []);

            const nextSlide = () => {
                setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + cardsPerView));
            };

            const prevSlide = () => {
                setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - cardsPerView));
            };

            const totalDots = Math.ceil(testimonials.length / cardsPerView);
            const activeDotIndex = Math.floor(currentIndex / cardsPerView);

            return (
                <div className="bg-[#fafafa] text-gray-900 antialiased font-['Poppins']">
                    {/* Navigation Bar */}
                    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                            <div className="flex items-center space-x-2 cursor-pointer transition transform hover:scale-105">
                                <img src="image/logo.png" alt="Brand Logo" className="w-10 h-10 object-contain" />
                            </div>
                            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium text-sm text-gray-600 font-['Open_Sans']">
                                <a href="#" className="hover:text-black transition-colors duration-300">Home</a>
                                <a href="#why-us" className="hover:text-black transition-colors duration-300">Why Us</a>
                                <a href="#strategy" className="hover:text-black transition-colors duration-300">Strategy</a>
                                <a href="#blog" className="hover:text-black transition-colors duration-300">Blog</a>
                                <a href="#faq" className="hover:text-black transition-colors duration-300">FAQs</a>
                            </div>
                            <div className="hidden md:block">
                                <button className="bg-black text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5">
                                    Get Started
                                </button>
                            </div>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl focus:outline-none hover:text-gray-600">
                                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 font-['Open_Sans']`}>
                            <a href="#" className="block text-gray-600 hover:text-black py-1" onClick={() => setIsMenuOpen(false)}>Home</a>
                            <a href="#why-us" className="block text-gray-600 hover:text-black py-1" onClick={() => setIsMenuOpen(false)}>Why Us</a>
                            <a href="#strategy" className="block text-gray-600 hover:text-black py-1" onClick={() => setIsMenuOpen(false)}>Strategy</a>
                            <a href="#blog" className="block text-gray-600 hover:text-black py-1" onClick={() => setIsMenuOpen(false)}>Blog</a>
                            <a href="#faq" className="block text-gray-600 hover:text-black py-1" onClick={() => setIsMenuOpen(false)}>FAQs</a>
                            <button className="w-full bg-black text-white py-2.5 rounded-sm text-sm font-medium">Get Started</button>
                        </div>
                    </nav>

                    {/* Hero Section */}
                    <header className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
                                Great design is<br />invisible
                            </h1>
                            <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-md font-['Open_Sans']">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seamless experiences don't demand attention; they gracefully clear the path for your user's goals.
                            </p>
                            <div>
                                <button className="bg-black text-white px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-2xl">
                                    Explore More
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 min-h-[350px] md:min-h-[calc(100vh-80px)] relative flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-200 wireframe-bg overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=80" alt="Hero design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 z-0" />
                            <div className="absolute bg-white/60 backdrop-blur-md p-5 rounded-full shadow-lg z-20 transform group-hover:rotate-12 transition-transform duration-500">
                                <i className="fa-regular fa-image text-3xl text-black"></i>
                            </div>
                        </div>
                    </header>

                    {/* Why Us Section */}
                    <section id="why-us" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-gray-100">
                        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why our clients trust us</h2>
                            <p className="text-gray-500 font-['Open_Sans'] text-sm sm:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 flex flex-col items-center w-full">
                                <div className="flex items-end w-full gap-4 justify-center mb-4">
                                    <div className="w-[62%] h-44 sm:h-64 relative rounded-sm overflow-hidden border border-gray-200 wireframe-bg shadow-sm">
                                        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Grid 1" />
                                    </div>
                                    <div className="w-[34%] h-36 sm:h-52 relative rounded-sm overflow-hidden border border-gray-200 wireframe-bg shadow-sm">
                                        <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Grid 2" />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-6 space-y-6">
                                {[1, 2, 3, 4].map((num) => (
                                    <div key={num} className="flex items-start space-x-4 p-4 rounded-md border border-gray-100 bg-white">
                                        <div className="text-xl text-teal-600"><i className="fa-regular fa-circle-check"></i></div>
                                        <div>
                                            <p className="text-gray-900 font-semibold">Lorem ipsum dolor sit amet.</p>
                                            <p className="text-gray-500 text-sm">Elementum nisl duis tortor sed.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Strategy Section */}
                    <section id="strategy" className="py-16 sm:py-20 bg-white border-t border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our business strategy</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-8">
                                <div><p className="text-4xl font-bold">12k+</p><p className="text-gray-400">Clients</p></div>
                                <div><p className="text-4xl font-bold">99%</p><p className="text-gray-400">Growth</p></div>
                                <div><p className="text-4xl font-bold">5k</p><p className="text-gray-400">Projects</p></div>
                                <div><p className="text-4xl font-bold">50M</p><p className="text-gray-400">Ratings</p></div>
                            </div>
                        </div>
                    </section>

                    {/* Blog Section */}
                    <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                        <div className="text-center mb-12"><h2 className="text-3xl font-bold">Latest blog</h2></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "The Rules of Modern Minimalist UI/UX", img: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=500&auto=format&fit=crop&q=80" },
                                { title: "How Design Systems Save Cycles", img: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?w=500&auto=format&fit=crop&q=80" },
                                { title: "Optimizing Landing Page Conversion", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80" }
                            ].map((blog, idx) => (
                                <div key={idx} className="bg-white border rounded-sm overflow-hidden shadow-sm">
                                    <img src={blog.img} className="h-48 w-full object-cover" alt={blog.title} />
                                    <div className="p-6">
                                        <h4 className="font-bold text-lg mb-2">{blog.title}</h4>
                                        <a href="#" className="text-sm font-semibold text-black hover:underline">Read Post</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <h2 className="text-3xl font-bold text-center mb-10">Our happy clients</h2>
                            <div className="flex justify-center space-x-4">
                                {testimonials.slice(currentIndex, currentIndex + cardsPerView).map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border w-full sm:w-1/2">
                                        <p className="text-gray-500 italic mb-4">{item.text}</p>
                                        <div className="flex items-center space-x-3">
                                            <img src={item.img} className="w-10 h-10 rounded-full object-cover" alt={item.name} />
                                            <div>
                                                <h5 className="font-bold text-sm">{item.name}</h5>
                                                <p className="text-gray-400 text-xs">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center space-x-4 mt-6">
                                <button onClick={prevSlide} className="px-4 py-2 bg-white border rounded-full shadow-sm">Prev</button>
                                <button onClick={nextSlide} className="px-4 py-2 bg-white border rounded-full shadow-sm">Next</button>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-center">Frequently noted questions</h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                { q: "How long does a standard UI revamp layout project take?", a: "Typically 2 to 4 weeks depending on structural complexities." },
                                { q: "Do you help migrate static assets into responsive systems?", a: "Yes, we seamlessly integrate conversion pathways for clean rendering." }
                            ].map((faq, idx) => (
                                <div key={idx} className="bg-white border rounded-sm shadow-sm">
                                    <button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx) } className="w-full flex justify-between p-5 text-left font-medium">
                                        <span>{faq.q}</span>
                                        <span>{openFaq === idx ? '-' : '+'}</span>
                                    </button>
                                    {openFaq === idx && <p className="p-5 pt-0 text-gray-500 text-sm border-t">{faq.a}</p>}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-white border-t border-gray-200 py-12 text-center text-xs text-gray-400">
                        <p>&copy; 2026 Brand Design Collective. All rights reserved.</p>
                    </footer>
                </div>
            );
        }

        // React 18 Root Rendering
        const root = React盤DOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
function Gallery() {
    return (
        <section id="gallery" className="py-16 border-t-2 border-dark">
            <div className="container">
                <h4 className="text-4xl text-center mb-6">Project Gallary</h4>
                <div className="flex justify-center items-center flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/2">
                        <img loading="lazy" className="w-full" src="./src/assets/gallery/0.webp" alt="exoskeleton" />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2">
                        <img loading="lazy" className="w-full" src="./src/assets/gallery/1.webp" alt="exoskeleton" />
                    </div>
                </div>

                <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-4">
                    <div><img loading="lazy" src="./src/assets/gallery/7.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/11.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/12.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/19.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/15.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/16.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/21.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/23.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/25.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/26.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/28.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/29.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/30.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/31.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/32.webp" alt="" /></div>
                    <div><img loading="lazy" src="./src/assets/gallery/33.webp" alt="" /></div>
                </div>
            </div>
        </section >
    );
}

export default Gallery

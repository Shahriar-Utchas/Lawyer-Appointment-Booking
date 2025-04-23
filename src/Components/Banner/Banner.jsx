import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-120 rounded-2xl"
                style={{
                    backgroundImage: "url(C002-assets/banner-img-1.png)",
                }}>
                <div className=""></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-[800px]">
                        <h1 className="mb-5 text-2xl md:text-4xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                        <p className="mb-5 text-sm md:text-base font-semibold text-gray-400">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
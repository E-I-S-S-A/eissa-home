import React from 'react';
import styles from "./InfiniteScroll.module.css"

const catImages = [
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    'https://images.unsplash.com/photo-1519052537078-e6302a4968d4',
    'https://images.unsplash.com/photo-1517451330947-7809dead78d5',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    'https://images.unsplash.com/photo-1519052537078-e6302a4968d4',
    'https://images.unsplash.com/photo-1517451330947-7809dead78d5',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    'https://images.unsplash.com/photo-1519052537078-e6302a4968d4',
    'https://images.unsplash.com/photo-1517451330947-7809dead78d5',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    'https://images.unsplash.com/photo-1519052537078-e6302a4968d4',
    'https://images.unsplash.com/photo-1517451330947-7809dead78d5',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
];

const InfiniteScroll: React.FC = () => {
    const duplicatedImages = [...catImages, ...catImages];

    return (
        <div className={styles.scroll_container}>
            <div className={styles.carousel_track}>
                {duplicatedImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`cat-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;
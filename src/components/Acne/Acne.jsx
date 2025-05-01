'use client'
import React from 'react';
import styles from '../../styles/TreatmentCategories.module.scss';
import Image from 'next/image';
import Link from 'next/link';


const treatmentCategories = [
    {
        id: 'acne',
        title: 'Acne Treatment',
        khmerTitle: 'សេវាកម្មព្យាបាលមុន',
        description: 'Clears clogged pores and reduces breakouts for smoother, healthier skin.',
        khmerDescription: 'ព្យាបាលស្បែកដែលមានបញ្ហាមុន',
        imageUrl: '/images/acne-treatement2.jpg',
        link: '/acnetreatment'
    },
    {
        id: 'anti-aging',
        title: 'Anti-Aging',
        khmerTitle: 'សេវាកម្មព្យាបាលស្នាម',
        description: 'Fades acne scars and skin imperfections to reveal a more even complexion.',
        khmerDescription: 'ស្ដារនិងវិញ្ញាណស្បែកវ័យក្មេង',
        imageUrl: '/images/acne-scar2.jpg',
        link: '/'
    },
    {
        id: 'hydration',
        title: 'Hydration',
        khmerTitle: 'សេវាកម្មប្រឆាំងភាពចាស់',
        description: 'Reduces fine lines and boosts skin firmness for a youthful appearance.',
        khmerDescription: 'សំណើមខ្ពស់សម្រាប់ស្បែកភ្លឺ',
        imageUrl: '/images/anti-aging2.jpg',
        link: '/'
    },
    {
        id: 'brightening',
        title: 'Brightening',
        khmerTitle: 'សេវាកម្មថែទាំ',
        description: 'Brightens dull skin and enhances natural radiance for a healthy glow.',
        khmerDescription: 'បង្កើនរស្មីស្បែកនិងសម្រស់',
        imageUrl: '/images/glow-skin2.jpg',
        link: '/'
    },
    {
        id: 'injection',
        title: 'Injection',
        khmerTitle: 'សេវាកម្មចាក់វីតាមីន',
        description: 'Boosts skin glow and hydration with essential vitamins.',
        khmerDescription: 'បង្កើនរស្មីស្បែកនិងសម្រស់',
        imageUrl: '/images/vitamin-inj.jpg',
        link: '/'
    },
    {
        id: 'hair-remove',
        title: 'Hair-Remove',
        khmerTitle: 'សេវាកម្មជម្រុះរោម',
        description: 'Removes unwanted hair for smooth, long-lasting results.',
        khmerDescription: 'បង្កើនរស្មីស្បែកនិងសម្រស់',
        imageUrl: '/images/hair-remove.jpg',
        link: '/'
    },
    {
        id: 'weight-loss',
        title: 'Weight-Loss',
        khmerTitle: 'សេវាកម្មសម្រកខ្លាញ់',
        description: 'Targets fat and shapes the body for a slimmer, healthier look.',
        khmerDescription: 'បង្កើនរស្មីស្បែកនិងសម្រស់',
        imageUrl: '/images/weight-loss.jpg',
        link: '/'
    }
];

const Acne = () => {
    return (
        <div className={styles['treatment-categories']}>
            <div className={styles.container}>
                <div className={styles['section-title']}>
                    <h2
                        lang="km"
                        className={`underline underline-offset-2 font-semibold ${styles['khmer-text']}`}
                    >
                        សេវាកម្ម
                    </h2>
                    <p className={`!mt-0 $styles['default-text']`}>
                        Discover Our Skin Treatment Services
                    </p>
                </div>

                <div className={ styles['categories-grid']}>
                    {treatmentCategories.map((category) => (
                        <div key={category.id} className={styles['category-card']}>
                            <div className={styles['category-image']}>
                                <Image
                                    src={category.imageUrl}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className='rounded rounded-md'
                                />
                            </div>
                            <div className={styles['category-content']}>
                                <h3
                                    className={`${styles['category-title']} ${styles['khmer-text']}`}
                                    lang="km"
                                >
                                    {category.khmerTitle}
                                </h3>
                                <p
                                    className={`${styles['category-description']} ${styles['default-text']}`}
                                >
                                    {category.description}
                                </p>
                                <Link
                                    href={category.link}
                                    className={styles['category-link']}
                                >
                                    View Treatments
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Acne;
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import treatmentData from '@/data/acnetreatment.json';
import styles from '../../styles/TreatmentList.module.scss';
import * as Icon from '@phosphor-icons/react'

const AcneTreatment = ({ category }) => {

    const [selectedTreatment, setSelectedTreatment] = useState(null);

    // Get treatments for the specific category
    const treatments = treatmentData[category.toLowerCase()] || [];

    const handleTreatmentSelect = (treatment) => {
        setSelectedTreatment(treatment);
    };

    const closeModal = () => {
        setSelectedTreatment(null);
    };

    return (
        <div className={styles['treatment-list-container']}>
            <div className={`!mt-4 ${styles['page-header']}`}>
                <h1 className={`underline underline-offset-5 heading5 ${styles['page-title']} ${styles['khmer-text']}`} lang="km">
                    សេវាកម្មព្យាបាលមុន
                </h1>
                <p className={styles['page-description']}>
                    Discover our specialized {category.toLowerCase()} treatments
                </p>
            </div>

            <div className={styles['treatments-grid']}>
                {treatments.map((treatment) => (
                    <div
                        key={treatment.id}
                        className={styles['treatment-card']}
                        onClick={() => handleTreatmentSelect(treatment)}
                    >
                        <div className={styles['treatment-image']}>
                            <Image
                                src={treatment.imageUrl}
                                alt={treatment.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className={styles['treatment-content']}>
                            <h3 className={styles['treatment-title']}>{treatment.name}</h3>
                            <p className={`${styles['treatment-description']} ${styles['khmer-text']}`} lang="km">
                                {treatment.description}
                            </p>
                            <div className={styles['treatment-meta']}>
                                <span>{treatment.duration}</span>
                                <span className={styles['khmer-text']} lang="km">តម្លៃ : ${treatment.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Treatment Details Modal */}
            {selectedTreatment && (
                <div className={styles['modal-overlay']} onClick={closeModal}>
                    <div
                        className={`${styles['modal-content']} ${styles['khmer-text']}`}
                        onClick={(e) => e.stopPropagation()}
                        lang="km"
                    >
                        <button
                            className={styles['modal-close']}
                            onClick={closeModal}
                        >
                            <Icon.X weight="bold"/>
                        </button>
                        <div className={styles['modal-header']}>
                            <div className={styles['modal-image']}>
                                <Image
                                    src={selectedTreatment.imageUrl}
                                    alt={selectedTreatment.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles['modal-title-section']}>
                                <h2 className={styles['modal-title']}>{selectedTreatment.name}</h2>
                                <p className={styles['modal-description']}>
                                    {selectedTreatment.detailedDescription}
                                </p>
                            </div>
                        </div>

                        <div className={styles['modal-details']}>
                            <div className={styles['modal-benefits']}>
                                <h3>អត្ថប្រយោជន៍ | Benefits</h3>
                                <ul>
                                    {selectedTreatment.benefits.map((benefit, index) => (
                                        <li key={index}>- {benefit}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles['modal-procedure']}>
                                <h3>របៀបធ្វើ | Procedure</h3>
                                <ol>
                                    {selectedTreatment.procedure.map((step, index) => (
                                        <li key={index}>- {step}</li>
                                    ))}
                                </ol>
                            </div>

                            <div className={styles['modal-pricing']}>
                                <div className={styles['pricing-detail']}>

                                    <span>រយៈពេលនៃការធ្វើ : {selectedTreatment.duration}</span>
                                </div>
                                <div className={styles['pricing-detail']}>

                                    <span>តម្លៃ : ${selectedTreatment.price}</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AcneTreatment;
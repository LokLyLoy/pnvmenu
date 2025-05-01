'use client'
import React from 'react';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles['footer-grid']}>
                    {/* Company Info Column */}
                    <div className={styles['footer-column']}>
                        <h4 className={`${styles['footer-title']} ${styles['khmer-text']}`} lang="km">
                            មជ្ឈមណ្ឌលថែរក្សាសម្ភស្ស ភី អិន វី
                        </h4>
                        <p className={`${styles['footer-description']} ${styles['khmer-text']}`} lang="km">
                            ប្រសិទ្ធភាព សុវត្ថិភាព សម្រស់ស្ថិតស្ថេរ
                        </p>
                        <div className={styles['social-links']}>
                            <Link href="https://www.facebook.com/PnVSkinClinicCenter.2" className={styles['social-icon']} target="_blank">
                                <Icon.FacebookLogo size={24} />
                            </Link>
                            <Link href="https://www.instagram.com/pnv_skincare_center?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={styles['social-icon']} target="_blank">
                                <Icon.InstagramLogo size={24} />
                            </Link>
                            <Link href="https://www.tiktok.com/@pnv_skin?is_from_webapp=1&sender_device=pc" className={styles['social-icon']} target="_blank">
                                <Icon.TiktokLogo size={24} />
                            </Link>
                            <Link href="https://t.me/pnv_skincare_center" className={styles['social-icon']} target="_blank">
                                <Icon.TelegramLogo size={24} />
                            </Link>
                        </div>
                    </div>
                    {/* Contact Info Column */}
                    <div className={`overflow-auto ${styles['footer-column']}`}>
                        <h4 className={`!ml-[10px] ${styles['footer-title']} ${styles['khmer-text']}`} lang="km">
                            ព័ត៌មានទំនាក់ទំនង
                        </h4>
                        <div className={styles['contact-info']}>
                            <div className={styles['contact-item']}>
                                <Icon.Phone size={20}/>
                                <span>+855 16 6624 024 | +855 70 992 996</span>
                            </div>
                            <div className={styles['contact-item']}>
                                <Icon.MapPin size={20}/>
                                <span>#88 Stoeung MeanChey, PhnomPenh</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={styles['footer-bottom']}>
                    <p className={styles['copyright']}>
                        © {new Date().getFullYear()} PnV Skin Care Center. All Rights Reserved.
                    </p>
                    <div className={styles['footer-policies']}>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react'
import cn from 'classnames'

import convisImage from '../../../../assets/img/convis.png'
import calendarImage from '../../../../assets/img/calendar.png'
import managementImage from '../../../../assets/img/management.png'
import styles from './index.module.scss'

const OutFeature = () => {
    return (
        <div className={styles.our_feature}>
            <div className={styles.our_feature_title}>
                Our core features
            </div>
            <div className={styles.our_feature_rows}>
                <div className={styles.our_feature_rows_content}>
                    <div className={styles.our_feature_rows_content_title}>
                        Content Visualization
                    </div>
                    <div className={styles.our_feature_rows_content_description}>
                        Visualisasikan setiap konten yang direncanakan dengan antarmuka yang intuitif dan interaktif. Dengan fitur ini, Anda dapat melihat preview postingan sesuai format platform media sosial, memastikan konten tampil sesuai harapan.
                    </div>
                    <button className={styles.our_feature_rows_content_btn}>
                        try it now!
                    </button>
                </div>
                <div className={styles.our_feature_rows_image}>
                    <img src={convisImage} alt="content-visualization" srcset="" />
                </div>
            </div>

            <div className={cn(styles.our_feature_rows, styles.reverse)}>
                <div className={styles.our_feature_rows_content}>
                    <div className={styles.our_feature_rows_content_title}>
                        CALENDAR Timeline
                    </div>
                    <div className={styles.our_feature_rows_content_description}>
                        Atur dan kelola konten dengan kalender timeline yang memudahkan penjadwalan. Fitur ini memberikan gambaran jelas kapan setiap konten akan diposting, sehingga Anda dapat merencanakan strategi media sosial secara teratur.                    </div>
                    <button className={styles.our_feature_rows_content_btn}>
                        try it now!
                    </button>
                </div>
                <div className={styles.our_feature_rows_image}>
                    <img src={calendarImage} alt="content-visualization" srcset="" />
                </div>
            </div>

            <div className={styles.our_feature_management}>
                <div className={styles.our_feature_management_title}>
                Content Management
                </div>
                <div className={styles.our_feature_management_description}>
                Kelola tim dan konten dengan lebih mudah! Fitur ini memungkinkan kolaborasi antar anggota tim, delegasi tugas, dan pelacakan progres setiap konten yang sedang dibuat.
                </div>
                <div className={styles.our_feature_management_image}>
                    <img src={managementImage}  />
                </div>
                <button className={styles.our_feature_management_btn}>
                        try it now!
                    </button>
            </div>
        </div>
    )
}

export default OutFeature
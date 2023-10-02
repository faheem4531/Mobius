import styles from './JoinUs.module.css'
import ApplyForm from '../applyForm/ApplyForm';

export function JobCard({ title }) {
  return (
    <div className={styles.jobCard}>
      <div className={styles.detail}>
        <h2>{title}</h2>
        <p>Full Time Job</p>
      </div>
      <div className={styles.requireContainer}>
        <h3>Requirements</h3>
        <p>Graduated in Computer science, Engineering, any equivalent Degree, having experience of 2-3 years.</p>
      </div>
    </div>
  )
};

const JoinUs = () => {
  return (
    <div className={styles.joinUs}>
      <div className={styles.cardWraper}>
        <JobCard title="Video Animator" />
        <div className={styles.midCard}><JobCard title="3D Artist" /></div>
        <JobCard title="CG Artist" />
      </div>
      <div className={styles.applyFormWraper}>
        <ApplyForm />
      </div>
    </div>

  )
};

export default JoinUs;

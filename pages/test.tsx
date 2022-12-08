import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

import Layout from '../lib/components/Layout'

export default function Test() {
  return (
    <Layout>
        <div className={styles.container}>
        Test Page <Link href="/">Home</Link>
        </div>
    </Layout>
  )
}

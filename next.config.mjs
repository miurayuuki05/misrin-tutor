/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        HYGRAPH_API : "https://api-ap-northeast-1.hygraph.com/v2/clt0nthb70xmg08vw8r11un6p/master",
        POSTGRES_DATABASE: "verceldb",
        POSTGRES_HOST: "ep-lucky-silence-a1b20j5v-pooler.ap-southeast-1.aws.neon.tech",
        POSTGRES_PASSWORD: "NyxQL4k0DSYO",
        POSTGRES_PRISMA_URL: "postgres://default:NyxQL4k0DSYO@ep-lucky-silence-a1b20j5v-pooler.ap-southeast-1.aws.neon.tech/verceldb?pgbouncer=true&connect_timeout=15&sslmode=require",
        POSTGRES_URL: "postgres://default:NyxQL4k0DSYO@ep-lucky-silence-a1b20j5v-pooler.ap-southeast-1.aws.neon.tech/verceldb?sslmode=require",
        POSTGRES_URL_NON_POOLING: "postgres://default:NyxQL4k0DSYO@ep-lucky-silence-a1b20j5v.ap-southeast-1.aws.neon.tech/verceldb?sslmode=require",
        POSTGRES_URL_NO_SSL: "postgres://default:NyxQL4k0DSYO@ep-lucky-silence-a1b20j5v-pooler.ap-southeast-1.aws.neon.tech/verceldb",
        POSTGRES_USER: "default",
        TURBO_REMOTE_ONLY: "",
        TURBO_RUN_SUMMARY: "",
        VERCEL: "1",
        VERCEL_ENV: "development",
        RESEND_API_KEY: "re_HyyuPTpj_LHZb5udEpk3p2gdua51M5wuN",
        BLOB_READ_WRITE_TOKEN: "vercel_blob_rw_uJfE949zmxk2BM3a_HejE8MjRGcKZelqVrFJj0SY9ucG0GY",
        JWT_SECRET : "I care more about others than I do myself, and I wont let anyone hurt them. When you have something special you want to protect, only then can you become truly strong. Rejection is a part of any mans life. Wake up to reality, nothing ever goes as planned. The longer you live, the more you will realize that the only thing that truly exist in this reality are merely pain, suffering, and futility. When people are protecting something truly special to them, they can become as strong as they can be. IF YOU DONT LIKE THE HAND THAT FATES DEALT YOU WITH, FIGHT FOR A NEW ONE. THE MOMENT PEOPLE COME TO KNOW LOVE, THEY RUN THE RISK OF CARRYING HATE.",
        PROD_DOMAIN : "misrintutor.vercel.app",
        DEV_DOMAIN : "localhost:3000",
    }
};

export default nextConfig;

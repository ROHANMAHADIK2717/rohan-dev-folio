import { Helmet } from "react-helmet";

const SEO = () => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>Rohan Mahadik | Software Engineer | Full Stack Developer</title>
            <meta
                name="description"
                content="Rohan Mahadik - Software Engineer skilled in Java, Spring Boot, Angular, MongoDB, AWS. Explore my projects, skills and contact details."
            />
            <meta
                name="keywords"
                content="Rohan Mahadik, Software Engineer, Full Stack Developer, Java Developer, Spring Boot, Angular, MongoDB, AWS, TypeScript, Portfolio"
            />
            <meta name="author" content="Rohan Mahadik" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://rohan-mahadik.netlify.app/" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Rohan Mahadik | Full Stack Developer" />
            <meta
                property="og:description"
                content="Java | Spring Boot | Angular | AWS | MongoDB | Explore my work and experience."
            />
            <meta property="og:url" content="https://rohan-mahadik.netlify.app/" />
            <meta
                property="og:image"
                content="https://rohan-mahadik.netlify.app/preview.png"
            />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Rohan Mahadik | Full Stack Developer" />
            <meta
                name="twitter:description"
                content="Explore my projects, skills and experience in full stack development using Java, Angular, Spring Boot, AWS."
            />
            <meta
                name="twitter:image"
                content="https://rohan-mahadik.netlify.app/preview.png"
            />

            {/* Open Graph (for LinkedIn + Facebook) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Rohan Mahadik | Full Stack Developer" />
            <meta
                property="og:description"
                content="Explore my portfolio showcasing Java, Spring Boot, Angular, MongoDB, AWS projects and skills."
            />
            <meta property="og:url" content="https://rohan-mahadik.netlify.app/" />
            <meta
                property="og:image"
                content="https://rohan-mahadik.netlify.app/preview.png"
            />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
    );
};

export default SEO;

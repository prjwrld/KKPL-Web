export default function Head() {
  const title = "KKPL - Karnataka Kabaddi Pro League"
  const description = "Where Strength Meets Spirit - Karnataka's Premier Kabaddi Tournament"
  const img = "https://static.wixstatic.com/media/0dd563_8ac0476e2e784045aec6b8d65bf3bb9a~mv2.png?kkpl_og=v3"
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.kkplkabaddi.com/" />
      <meta property="og:site_name" content="KKPL" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:image:secure_url" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="KKPL – Karnataka Kabaddi Pro League" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </>
  )
}

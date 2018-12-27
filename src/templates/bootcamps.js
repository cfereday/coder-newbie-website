// import React from 'react'
// import Helmet from 'react-helmet'
// import { Link,graphql } from 'gatsby'
// import get from 'lodash/get'
//
// import Bio from '../components/Bio'
// import Layout from '../components/layout'
// import { rhythm, scale } from '../utils/typography'
//
// class BootcampsTemplate extends React.Component {
//   render() {
//     const countryBootcamps = this.props.data.markdownRemark;
//     const siteTitle = get(this.props, 'data.site.siteMetadata.city');
//     const siteDescription = countryBootcamps.excerpt;
//     const { previous, next } = this.props.pageContext;
//
//
//     return (
//       <Layout location={this.props.location}>
//         <Helmet
//           htmlAttributes={{ lang: 'en' }}
//           meta={[{ name: 'description', content: siteDescription }]}
//           city={`${countryBootcamps.frontmatter.city} | ${siteTitle}`}
//         />
//         <h1>{countryBootcamps.frontmatter.city}</h1>
//         <p
//           style={{
//             ...scale(-1 / 5),
//             display: 'block',
//             marginBottom: rhythm(1),
//             marginTop: rhythm(-1),
//           }}
//         >
//           {countryBootcamps.frontmatter.date}
//         </p>
//         <div dangerouslySetInnerHTML={{ __html: countryBootcamps.html }} />
//         <hr
//           style={{
//             marginBottom: rhythm(1),
//           }}
//         />
//         <Bio />
//
//         <ul
//           style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             listStyle: 'none',
//             padding: 0,
//           }}
//         >
//           <li>
//             {
//               previous &&
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.city}
//               </Link>
//             }
//           </li>
//           <li>
//             {
//               next &&
//               <Link to={next.fields.slug} rel="next">
//                 {next.frontmatter.city} →
//               </Link>
//             }
//           </li>
//         </ul>
//       </Layout>
//     )
//   }
// }
//
// export default BootcampsTemplate
//
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         city
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt
//       html
//       frontmatter {
//         city
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `

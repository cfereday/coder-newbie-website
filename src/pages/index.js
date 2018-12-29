import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Meetups from '../components/Meetups'
import Bootcamps from '../components/Bootcamps'
import OnlineResources from '../components/Online-Resources'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h1>This website has been created to be a useful source of information for people interested in learning to code for free.</h1>
        <h3>You don't have to spend a lot of money to learn to code. There are many free resources and groups that can help you. Don't let money stop you. We need more diversity in tech and so often the blockers are lack of information and money, because we need greater diversity to create better software.</h3>
        <h3>Click on the buttons to find start your coding journey today </h3>
        <br/>
        <br/>
        <Meetups />
        <br/>
        <br/>
        <Bootcamps />
        <br/>
        <br/>
        <OnlineResources />
        <br/>
        <br/>
        <br/>
        <br/>
        <Bio />
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`

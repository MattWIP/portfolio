// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document Types
import page from './schema/documents/page'
import route from './schema/documents/route'
import siteConfig from './schema/documents/siteConfig'

// Object Types
import cta from './schema/objects/cta'
import embedHTML from './schema/objects/embedHTML'
import figure from './schema/objects/figure'
import hero from './schema/objects/hero'
import imageSection from './schema/objects/imageSection'
import internalLink from './schema/objects/internalLink'
import link from './schema/objects/link'
import portableText from './schema/objects/portableText'
import simplePortableText from './schema/objects/simplePortableText'
import textSection from './schema/objects/textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    /* Documents */
    page,
    route,
    siteConfig,

    /* Objects */
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    portableText,
    simplePortableText,
    textSection,

  ]),
})

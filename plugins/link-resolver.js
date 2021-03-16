/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  if (doc.type === 'case_study') {
    return `/case-studies/${doc.uid}`
  }

  if (doc.type === 'update') {
    return `/updates/${doc.uid}`
  }

  return '/not-found'
}
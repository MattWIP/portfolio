export default {
    title: 'Call To Action',
    name: 'cta',
    type: 'object',
    validation: (Rule) => Rule.custom((fields = {}) => !fields.route || !fields.link || 'Only one link type is allowed'),
    fieldsets: [
        {
            title: 'Link',
            name: 'link'
        }
    ],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        // {
        //     title: 'Internal Link',
        //     description: 'Use this to link between pages on the website',
        //     name: 'route',
        //     type: 'reference',
        //     to: [{ type: 'route' }],
        //     fieldset: 'link'
        // },
        {
            title: 'External link',
            name: 'link',
            type: 'url',
            fieldset: 'link'
        }
    ],
    preview: {
        select: {
            title: 'Title',
            routeTitle: 'route.title',
            slug: 'route.slug.current',
            link: 'link'
        },
        prepare({
            title,
            routeTitle = '',
            slug,
            link
        }) {
            const subtitleExtra = slug ? `Slug:/${slug}/` : link ? `External Link: ${link}` : 'Not set';
            return {
                title: `${title}`,
                subtitle: `${routeTitle} ${subtitleExtra}`
            }
        }
    }
}
export default {
    widgets: [
        {
            name: 'project-info',
            options: {
                data: [
                    {
                        title: 'GitHub repo',
                        value: 'www.github.com',
                        category: 'Code'
                    },
                    {
                        title: 'Frontend',
                        value: typeof document === 'undefined' ? '/' : location.origin,
                        category: 'apps',
                    },
                ],
            },
        },
        {
            name: 'document-list',
            options: {
                title: 'Recently edited',
                order: '_updateDate desc',
                limit: 10,
                types: ['page']
            },
            layout: { width: 'medium' },
        },
        { name: 'project-users', layout: {height: 'auto' }}
    ]
}
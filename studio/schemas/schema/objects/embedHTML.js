import React from "react"

const HTMLpreview = ({ value }) => (
    <div dangerouslySetInnerHTML={{__html: value.html}} />
)

export default {
    name: 'embedHTML',
    title: 'Embed HTML',
    type: 'object',
    fields: [
        {
            name: 'html',
            title: 'HTML',
            type: 'text',
            description: 'Avoid storing freeform HTML. Primary use case should be for embed codes',
            options: {
                language: 'html',
            },
        },
    ],
    preview: {
        select: {
            html: 'htm'
        },
        component: HTMLpreview
    }
}
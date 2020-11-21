import React from 'react'

const FlexBox = (props) => {
    const styling = {
        display: 'flex',
        justifyContent: props.jc || 'space-evenly',
        alignItems: props.ai || 'center',
        textAlign: props.ta || 'center',
        flexWrap: props.fw || 'wrap',
        height:'100%'
    }
    return <div class={props.class} id={props.id} style={{ ...styling, ...props.style }}>{props.children}</div>
}

const FlexItem = (props) => {
    const styling = {
        flex: props.flex || 1,
        height:'100%'
    }

    return <div class={props.class} id={props.id} style={{ ...styling, ...props.style }}>{props.children}</div>
}


export { FlexBox, FlexItem }
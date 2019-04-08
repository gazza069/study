Vue.component('functional-component', {
    functional: true,
    render: function(createElement, context) {
        return createElement('div', context.props.message)
    },
    props: {
        message: String
    }
}

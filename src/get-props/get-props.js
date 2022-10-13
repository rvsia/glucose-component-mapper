const getProps = ({ meta }) => {
    const props = {};

    if(meta.touched && meta.error) {
        props.error = meta.error
    }

    return props;
}

export default getProps;

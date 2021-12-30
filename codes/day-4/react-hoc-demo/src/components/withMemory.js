import React, { PureComponent } from "react"

const withMemo = (OC) => {
    class WithMemo extends PureComponent {
        render() {
            return <OC {...this.props} />
        }
    }
    return WithMemo
}
export default withMemo

export const Foo = withMemo(
    function (props) {
        return <div>{props.val}</div>
    }
)

//<Foo val={0}/>
//<Foo val={1}/>

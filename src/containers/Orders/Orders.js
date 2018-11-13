import React, {Component} from 'react'

import Order from '../../components/Order/Order'

class Orders extends Component {
    render () {
        return (
            <div style={{marginTop: '80px'}}>
                <Order />
                <Order />
            </div>
        )
    }
}

export default Orders
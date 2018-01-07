// Redux
import { connect } from 'react-redux'
import * as HousesActions from 'ShoppingFever/src/redux/actions/houses'
import { Actions } from 'react-native-router-flux'
import View from './view'

const mapStateToProps = (state) => {
    console.log('state',state)
    console.log('state.data', state.data)
    return {
        list: state.houses.list,
        isFetching: state.houses.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHousesList: () => {
            dispatch(HousesActions.fetchHousesList())
        },

        updateSelected: (house) => {
            dispatch(HousesActions.updateHouseSelected(house))
            Actions.CharactersList({ title: house.nombre })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
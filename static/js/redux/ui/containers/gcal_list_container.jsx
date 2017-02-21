import { connect } from 'react-redux';
import GCalList from '../gcal_list.jsx';
import { fetchAvailability } from '../../actions/dtm_actions.jsx'

const mapStateToProps = (state) => {
	return {
		calendars: state.dtmCalendars.calendars
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCalendar: (id) => {
			dispatch({
				type: "TOGGLE_CALENDAR_VISIBILITY",
				id: id
			});
			dispatch(fetchAvailability());
		}
	}
}

const GCalListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GCalList);

export default GCalListContainer;

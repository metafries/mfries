import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import EventListItem from './EventListItem.jsx'
import Loader from '../layout/Loader.jsx'

class EventList extends Component {
  render() {
    const {type, loadMoreEvents, loader, loading, opts, fba, events} = this.props;
    return (
      <div>
        {
          this.props.initialize && opts != events.length
          ? <Loader/>
          : <div>
              <h6 className='mx-3 font-weight-bold mb-1'>
                Total of
                <span className='mx-1'>{opts}</span>
                <span className='mr-1'>{type}</span>
                {events && events.length > 1 ? 'Events' : 'Event'}
              </h6>
              {
                events && events.length > 0 && 
                <InfiniteScroll
                  pageStart={0}
                  loadMore={loadMoreEvents}
                  hasMore={!loading && loader}
                  initialLoad={false}
                  >
                  {
                    events.map((e,index) => (
                      <EventListItem 
                        index={index} 
                        opts={opts} 
                        key={e.id} 
                        fba={fba} 
                        event={e} 
                        events={events} 
                      />        
                    ))
                  }
                </InfiniteScroll>
              }
            </div>
        }
      </div>
    )
  }
}

export default EventList
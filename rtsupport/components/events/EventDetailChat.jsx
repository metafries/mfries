import React, { Component } from 'react'
import EventDetailReply from './EventDetailReply.jsx'

class EventDetailChat extends Component {
  state = {
    replyTarget: ''
  }
  onCommentReply = (e) => {
    console.log(e.target.value)
    this.setState({
      replyTarget: e.target.value
    })
  }
  render() {
    return (
      <div className='card rounded-0'>
        <div className='card-header rounded-0 transbox px-3'>
          <h5 className='mb-0'>4 Comments</h5>              
        </div>
        <div className='card-body px-3'>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row" className='signout rounded-circle px-0 py-3'>
                  <img src='/static/images/whazup-square-logo.png' className="signout rounded-circle" alt="..."/>
                </th>
                <td className='pr-0'>
                  <form>
                    <textarea 
                      class="form-control rounded-0" 
                      placeholder="Enter Comment ..." 
                      rows="3">
                    </textarea>    
                    <button type="submit" class="btn btn-dark rounded-0 text-ddc213 font-weight-bold float-right mt-2">Post</button>          
                  </form>
                </td>
              </tr>
              <EventDetailReply replyTarget={this.state.replyTarget}/>
              <tr>
                <th scope="row" className='signout rounded-circle px-0 py-3'>
                  <img src='/static/images/whazup-square-logo.png' className="signout rounded-circle" alt="..."/>
                </th>
                <td className='pr-0'>
                  <strong>Matt </strong><small>Today at 5:42PM</small>
                  <p className='mb-0'>How artistic!</p>
                  <button 
                    type="button" 
                    class="btn btn-link btn-sm p-0" 
                    data-toggle="modal" 
                    data-target="#eventidreply_1"
                    value='eventidreply_1'
                    onClick={this.onCommentReply}>
                    Reply
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row" className='signout rounded-circle px-0 py-3'>
                  <img src='/static/images/whazup-square-logo.png' className="signout rounded-circle" alt="..."/>
                </th>
                <td>
                  <strong>Elliot Fu </strong><small>Yesterday at 12:30AM</small>
                  <p className='mb-0'>This has been very useful for my research. Thanks as well!</p>
                  <button 
                    type="button" 
                    class="btn btn-link btn-sm p-0"
                    data-toggle="modal"
                    data-target="#eventidreply_2"
                    value='eventidreply_2'
                    onClick={this.onCommentReply}>
                    Reply
                  </button>
                  <th scope="row" className='signout rounded-circle px-0 py-3'>
                    <img src='/static/images/whazup-square-logo.png' className="signout rounded-circle" alt="..."/>
                  </th>
                  <td>
                    <strong>Jenny Hess </strong><small>Just now</small>
                    <p className='mb-0'>Elliot you are always so right!</p>
                    <button 
                      type="button" 
                      class="btn btn-link btn-sm p-0"
                      data-toggle="modal"
                      data-target="#eventidreply_2_1"
                      value='eventidreply_2_1'
                      onClick={this.onCommentReply}>
                      Reply
                    </button>
                  </td>
                </td>
              </tr>
              <tr>
                <th scope="row" className='signout rounded-circle px-0 py-3'>
                  <img src='/static/images/whazup-square-logo.png' className="signout rounded-circle" alt="..."/>
                </th>
                <td className='pr-0'>
                  <strong>Joe Henderson </strong><small>5 days ago</small>
                  <p className='mb-0'>Dude, this is awesome. Thanks so much</p>
                  <button 
                    type="button" 
                    class="btn btn-link btn-sm p-0" 
                    data-toggle="modal" 
                    data-target="#eventidreply_3"
                    value='eventidreply_3'
                    onClick={this.onCommentReply}>
                    Reply
                  </button>
                </td>
              </tr>
            </tbody>      
          </table>        
        </div>
      </div>
    )  
  }
}

export default EventDetailChat

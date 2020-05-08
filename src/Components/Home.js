import React,{Component} from 'react';
import { ListContact } from './ListContact';
import { AddContact } from './AddContact';

export class Home extends Component
{
    render()
    {
        let contacts = this.props.getContacts(this.props.user);       

        return (
            <div>
                <h5>Welcome {this.props.user}</h5>
                <nav style={{float:"right"}}>
                    <button>list contact</button>
                    <button>add contact</button>
                    <button onClick={this.props.logout}>logout</button>
                </nav>
                <AddContact addContact={this.props.addContact} user={this.props.user}></AddContact>
                <ListContact contacts={contacts}></ListContact>
            </div>
        );
    }
}

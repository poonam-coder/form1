import React,{Component} from 'react';

export class ListContact extends Component{

    render()
    {

        let contactArray = this.props.contacts.map(contact=><tr key={contact.phone}><td>{contact.name}</td><td>{contact.city}</td><td>{contact.phone}</td><td>{contact.company}</td></tr>);

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>CITY</th>
                            <th>PHONE</th>
                            <th>COMPANY</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contactArray}
                    </tbody>
                </table>
            </div>
        );
    }
}

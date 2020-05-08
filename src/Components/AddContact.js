import React,{Component} from 'react';

export class AddContact extends Component{

    doAddContact = (event)=>{
        event.preventDefault();
        let contact = {name:event.target.name.value,city:event.target.city.value,phone:event.target.phone.value,company:event.target.company.value};
        this.props.addContact(this.props.user,contact);
    }


    render()
    {
        return (
            <div>
                <form onSubmit={this.doAddContact}>
                    
                    <label>Enter Name:</label>
                    <input type="text" name="name" className="form-control"></input>

                    <label>Enter City:</label>
                    <input type="text" name="city" className="form-control"></input>

                    <label>Enter Phone:</label>
                    <input type="text" name="phone" className="form-control"></input>

                    <label>Enter Company:</label>
                    <input type="text" name="company" className="form-control"></input>

                    <button className="btn btn-secondary">add contanct</button>
                </form>
            </div>
        );
    }

}
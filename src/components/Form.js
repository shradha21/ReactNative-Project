import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

class Form extends React.Component {
    constructor() {
        super()
        this.state= {
            fullname: '', 
            items: [],
            skills: '',
            profession: '' ,
            dob: ''
        }
    }

    clickme = (e) => {
        e.preventDefault()
        const data = {
            fullname: this.state.fullname,
            skills: this.state.skills,
            profession: this.state.profession,
            dob: this.state.dob,
            item: this.state.item
        }
        this.props.dispatch.onRegister(data)
    }

    render() {
        return(
            <View style= {{ backgroundColor: '#03d3fc'}}>
                <Text h3>Aay Works</Text>
                <Text h2>On Boarding</Text>

                <Text h4>Your Details</Text>

                <TextInput 
                    placeholder= "Full Name" 
                    onChangeText= {(text) => {this.setState({fullname: text})}} 
                    value= {value} 
                    style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 2}}
                />

                <Picker
                    selectedValue= {this.state.PickerValue}
                    onValueChange= {(itemValue,itemIndex) => this.setState(PickerValue)}
                    style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 2}}
                >

                <Picker.Item label="Male" value= "Male"  />

                <Picker.Item label="Female" value= "Female"  />

                </Picker>

                <TextInput 
                    placeholder= "Date of Birth" 
                    value= {value} 
                    style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 2}}
                />

                <Picker 
                    selectedValue= {this.state.Profession}
                    placeholder= "Select Profession"
                    onValueChange= {(itemValue,itemIndex) => this.setState(Profession)}
                    style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 2}}
                >

                <Picker.Item label= ""   />

                <Picker.Item label= ""   />

                <Picker.Item label= ""   />

                </Picker>

                <TextInput 
                    placeholder= "Enter Skills Upto 5" 
                    onChangeText= {(text) => {this.setState({skills: text})}}
                    value= {value} 
                    style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 2}}
                />  

                <Button title= "continue" onPress= {this.clickme} />
            </View>
        )
    }
}

export default Form


import Switch from '@material-ui/core/Switch';
const Index = (props) => {
    return <div>
        <Switch
            checked={props.checked}
            onChange={props.onChange}
            name="checkedB"
            color="primary"
        />
        <label> {props.text}</label>
    </div>
}
export default Index;
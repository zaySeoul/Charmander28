import React from 'react';
import $ from 'jquery';


class AddCategory extends React.Component {
  constructor(props) {
    console.log('im here in AddCategory');
    super(props);
    this.state = {
      category: [],
    };
    this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    this.setData = this.setData.bind(this);
  }

  //  collecting the array of selected checkbox values onClick event
  onCheckBoxClick(e) {
    let selectedElement = $("input[name='activities']:checked");
    let arr = [];
    const obj = this;
    $.each(selectedElement, function (index) {
      console.log(index, $(this).val());
      arr.push($(this).val());
      if (selectedElement.length - 1 === index) {
        obj.setData(arr);
      }
    });
  }

  //  setting the state with the array of user selected categories
  setData(data) {
    this.setState({
      category: data,
    });
  }

  render() {
    console.log('state', this.state.category);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div>
                <label>
                  <input type="checkbox" name="activities" value="eat" onClick={this.onCheckBoxClick} />
                 Eat
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="activities" value="party" onClick={this.onCheckBoxClick} />
                  Party
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="activities" value="sleep" onClick={this.onCheckBoxClick} />
                  Sleep
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="activities" value="fun" onClick={this.onCheckBoxClick} />
              Fun
                </label>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default AddCategory;

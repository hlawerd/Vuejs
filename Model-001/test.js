window.onload = function(){
    Vue.component('part01',{
        template:`
        <form class="needs-validation" novalidate>
            <div class="form-row">

                <div class="col-md-4 mb-3">
                    <label for="validationCustom01">{{fistname}}</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
                    <div class="valid-feedback">  {{goodmessage}}  </div>
                </div>
                <div class="col-md-4 mb-3">   
                    <label for="validationCustom02">{{lastname}}</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
                    <div class="valid-feedback"> {{goodmessage}}   </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationCustomUsername">{{Username}}</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
                        <div class="invalid-feedback">  {{failmessage + Username}}  </div>
                    </div>
                </div>
                
            </div>

            <div class="form-row" >
                <div class="col-md-4 mb-3">
                    <label for="validationCustom05">{{motive}}</label>
                    <select class="custom-select" required>
                        <option v-for="post in limotiv" :key="post.id">{{post.title}}</option>
                    </select>
                    <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationCustom03">{{city}}</label>
                    <select class="custom-select" required>
                        <option v-for="post in licity" :key="post.id">{{post.title}}</option>
                    </select>
                    <div class="invalid-feedback">  {{failmessage + city}}  </div>
                </div>
                <div class="col-md-2 mb-3">
                    <label for="validationCustom04">{{state}}</label>
                    <select class="custom-select" id="validationCustom04" placeholder="State" required>
                        <option v-for="post in listate" :key="post.id">{{post.title}}</option>
                    </select>
                    <div class="invalid-feedback">  {{failmessage + state}} </div>
                </div>
                <div class="col-md-2 mb-3">
                    <label for="validationCustom05">{{Zip}}</label>
                    <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
                    <div class="invalid-feedback">  {{failmessage + Zip}}  </div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-md-3 mb-3">
                    <label for="validationCustom06">{{motive}}</label>
                    <select class="custom-select" id="validationCustom06">
                        <option v-for="post in limotiv" :key="post.id">{{post.title}}</option>
                    </select>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationCustom07">{{message}}</label>
                    <textarea rows="2" cols="72" name="comment" form="usrform" id="validationCustom07" placeholder="Enter text here...">
                            
                    </textarea>
                    <div class="invalid-feedback">  {{failmessage + message}}  </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">{{submit}}</button>
        </form>
        `,
        data(){
            return {
                fistname: 'First name',
                lastname: 'Last name ',
                Username: 'Username',
                city: 'City',
                state: 'State',
                Zip: 'ZIP',
                motive: 'Motivated',
                goodmessage: 'Looks good!',
                failmessage: 'Please provide a valid ',
                message: 'Describe typing below',
                submit: 'Submit form',
                listate: [
                    {id: 1, title: ``, body: 'Open this select menu'},
                    {id: 2, title: 'ON', body: 'Ontario'},
                    {id: 3, title: 'QC', body: 'Quebec'},
                    {id: 4, title: 'NS', body: 'Nova Scotia'},
                    {id: 5, title: 'NB', body: 'New Brunswick'},
                    {id: 6, title: 'BC', body: 'British Columbia'},
                    {id: 7, title: 'PE', body: 'Prince Edward Island'},
                    {id: 8, title: 'SK', body: 'Saskatchewan'},
                    {id: 9, title: 'AB', body: 'Alberta'},
                    {id: 10, title: 'NL', body: 'Newfoundland and Labrador'},
                    {id: 11, title: 'NT', body: 'Northwest Territories'},
                    {id: 12, title: 'YT', body: 'Yukon'},
                    {id: 13, title: 'NU', body: 'Nunavut'},
                    {id: 14, title: 'MB', body: 'Manitoba'},
                ],
                licity: [
                    {id: 1, title: ``},
                    {id: 2, title: 'Brandon'},
                    {id: 3, title: 'Dauphin'},
                    {id: 4, title: 'Flin Flon'},
                    {id: 5, title: 'Morden'},
                    {id: 6, title: 'Winnipeg'},
                ],
                limotiv: [
                    {id: 1, title: ``},
                    {id: 2, title: 'Recomadation'},
                    {id: 3, title: 'Information'},
                    {id: 4, title: 'Clarify'},
                    {id: 5, title: 'Question'},
                ]
            }
        }
    });
    Vue.component('h1line1',{
        template: { template: '<h1>Formulario de contato</h1>'}
    });
    new Vue({
        el: '#head01'
    });
    let vm = new Vue({
        el: '#contactline1'
    });


    Vue.component('line1',{
        template: `
            
            <div class="nav-side-menu">
                <div class="brand">Brand Logo</div>
                <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                <div class="menu-list">
                    <ul id="menu-content" class="menu-content collapse out">
                        <li>
                            <a href="#">
                                <i class="fa fa-dashboard fa-lg"></i> Dashboard
                            </a>
                        </li>
                        <li data-toggle="collapse" data-target="#new" class="collapsed">
                            <a href="#"><i class="fa fa-car fa-lg"></i> New <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="new">
                            <li>New New 1</li>
                        </ul>
                    </ul>
                </div>
            </div>
        
        `
    })
    let vm1 = new Vue({
        el: '#leftsidemain',
        data: {}

    });

}
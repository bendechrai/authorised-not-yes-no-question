import React, { Component } from "react"
import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Columns,
  Image,
  Text,
  Code,
  Footer,
  Highlight,
  Quote,
  List,
  Browser,
  Video,
} from "@sambego/diorama"
import "prismjs/components/prism-bash.min.js"
import "prismjs/components/prism-jsx.min.js"
import "prismjs/components/prism-javascript.min.js"
import "./App.css"

import Alert from "./Alert"
import Rainbow from "./Rainbow"

import Ben from "./img/ben.jpg"
import LoginPage from "./img/login-page.png"
import SocialLogins from "./img/social-logins.png"

import IconUser from "./img/icons/User.svg"
import IconRole from "./img/icons/Generic-Enterprise-Directory.svg"
import IconPermission from "./img/icons/Certificate.svg"

import Poes from "./img/poes.jpg"
import Husky from "./img/husky.jpg"
import Capi from "./img/cap.jpg"
import Orca from "./img/orca.jpg"
import PresenterNotes1 from "./img/presenter-1.png"
import PresenterNotes2 from "./img/presenter-2.png"

import Iceland from "./video/iceland.mp4"

class App extends Component {
  static footer = (
    <Footer
      style={{
        color: "#eb5424",
        webkitTextStroke: "4px white",
        paintOrder: "stroke fill",
      }}
      left="@bendechrai"
    />
  )

  render() {
    return (
      <Deck
        footer={App.footer}
        presenterNotes={
          window.location.search.includes("presenterNotes") // navigation
        }
      >
        <Slide className="highlight">
          <Title>Authorised is Not a Yes/No Question</Title>
        </Slide>
        <Slide>
          <Code code={`if (user.isAuthenticated) {\n  ... do stuff\n}`} lang="javascript" />
        </Slide>
        <Slide>
          <Image src={LoginPage} fragment />
        </Slide>
        <Slide>
          <Image src={SocialLogins} fragment />
        </Slide>
        <Slide>
          <Title>Logged In?</Title>
          <Subtitle>
            No / <Highlight>Yes</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Code code={`if (user.hasPermission('edit:items')) {\n ... \n}`} lang="javascript" />
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Image src={Ben} alt="A picture of me" full color="#bbbb99" />
            </div>
            <div>
              <Subtitle>Ben Dechrai</Subtitle>
              <List>
                <li>
                  <span role="img" aria-label="old man">
                    👴
                  </span>{" "}
                  software dev for 21 years
                </li>
                <li>
                  <span role="img" aria-label="monkey speak no evil">
                    🙊
                  </span>{" "}
                  privacy advocate
                </li>
                <li>
                  <span role="img" aria-label="green heart">
                    💚
                  </span>{" "}
                  dev / open source communities
                </li>
                <li>
                  <span role="img" aria-label="shield">
                    🛡️
                  </span>{" "}
                  dev advocate @ auth0
                </li>
                <li>
                  <span role="img" aria-label="bird">
                    🐦
                  </span>{" "}
                  @bendechrai
                </li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide>
          <Title>Access Control</Title>
        </Slide>
        <Slide className="collapse-columns">
          <Title>Access Control</Title>
          <Columns>
            <div>
              <Text>
                <Highlight>Attribute-based</Highlight>
                <br />
                Access Control
                <br />
                (ABAC)
              </Text>
            </div>
            <div>
              <Text>
                <Highlight>Role-based</Highlight>
                <br />
                Access Control
                <br />
                (RBAC)
              </Text>
            </div>
          </Columns>
        </Slide>
        {/* 
        
        
        
        
        
        
        
        
        
        
        */}
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
            </div>
            <div>
              <Text>Action</Text>
            </div>
            <div>
              <Text>Object</Text>
            </div>
            <div>
              <Text>Contextual</Text>
            </div>
          </Columns>
        </Slide>
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
              <List>
                <li>Department</li>
                <li>Clearance Level</li>
                <li>Age</li>
              </List>
            </div>
            <div>
              <Text>Action</Text>
            </div>
            <div>
              <Text>Object</Text>
            </div>
            <div>
              <Text>Contextual</Text>
            </div>
          </Columns>
        </Slide>
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
              <List>
                <li>Department</li>
                <li>Clearance Level</li>
                <li>Age</li>
              </List>
            </div>
            <div>
              <Text>Action</Text>
              <List>
                <li>Read</li>
                <li>Update</li>
                <li>Report</li>
                <li>Approve</li>
              </List>
            </div>
            <div>
              <Text>Object</Text>
            </div>
            <div>
              <Text>Contextual</Text>
            </div>
          </Columns>
        </Slide>
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
              <List>
                <li>Department</li>
                <li>Clearance Level</li>
                <li>Age</li>
              </List>
            </div>
            <div>
              <Text>Action</Text>
              <List>
                <li>Read</li>
                <li>Update</li>
                <li>Report</li>
                <li>Approve</li>
              </List>
            </div>
            <div>
              <Text>Object</Text>
              <List>
                <li>Type</li>
                <li>Clearance Level</li>
                <li>Geographic Restrctions</li>
              </List>
            </div>
            <div>
              <Text>Contextual</Text>
            </div>
          </Columns>
        </Slide>
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
              <List>
                <li>Department</li>
                <li>Clearance Level</li>
                <li>Age</li>
              </List>
            </div>
            <div>
              <Text>Action</Text>
              <List>
                <li>Read</li>
                <li>Update</li>
                <li>Report</li>
                <li>Approve</li>
              </List>
            </div>
            <div>
              <Text>Object</Text>
              <List>
                <li>Type</li>
                <li>Clearance Level</li>
                <li>Geographic Restrctions</li>
              </List>
            </div>
            <div>
              <Text>Contextual</Text>
              <List>
                <li>Time</li>
                <li>Location</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
              <List>
                <li>Department</li>
                <li>Clearance Level</li>
                <li>Age</li>
              </List>
            </div>
            <div>
              <Text>Action</Text>
              <List>
                <li>Read</li>
                <li>Update</li>
                <li>Report</li>
                <li>
                  <Highlight>Approve</Highlight>
                </li>
              </List>
            </div>
            <div>
              <Text>Object</Text>
              <List>
                <li>Type</li>
                <li>Clearance Level</li>
                <li>Geographic Restrctions</li>
              </List>
            </div>
            <div>
              <Text>Contextual</Text>
              <List>
                <li>Time</li>
                <li>Location</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
              <List>
                <li>Department</li>
                <li>
                  <Highlight>Clearance Level</Highlight>
                </li>
                <li>Age</li>
              </List>
            </div>
            <div>
              <Text>Action</Text>
              <List>
                <li>Read</li>
                <li>Update</li>
                <li>Report</li>
                <li>
                  <Highlight>Approve</Highlight>
                </li>
              </List>
            </div>
            <div>
              <Text>Object</Text>
              <List>
                <li>Type</li>
                <li>
                  <Highlight>Clearance Level</Highlight>
                </li>
                <li>Geographic Restrctions</li>
              </List>
            </div>
            <div>
              <Text>Contextual</Text>
              <List>
                <li>Time</li>
                <li>Location</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide notes="Type: medical record, bank account, surveillance briefing, ...">
          <Subtitle>Attribute-based Access Control</Subtitle>
          <Columns className="smaller align-top">
            <div>
              <Text>Subject</Text>
              <List>
                <li>Department</li>
                <li>
                  <Highlight>Clearance Level</Highlight>
                </li>
                <li>Age</li>
              </List>
            </div>
            <div>
              <Text>Action</Text>
              <List>
                <li>Read</li>
                <li>Update</li>
                <li>Report</li>
                <li>
                  <Highlight>Approve</Highlight>
                </li>
              </List>
            </div>
            <div>
              <Text>Object</Text>
              <List>
                <li>Type</li>
                <li>
                  <Highlight>Clearance Level</Highlight>
                </li>
                <li>
                  <Highlight>Geographic Restrctions</Highlight>
                </li>
              </List>
            </div>
            <div>
              <Text>Contextual</Text>
              <List>
                <li>Time</li>
                <li>
                  <Highlight>Location</Highlight>
                </li>
              </List>
            </div>
          </Columns>
        </Slide>
        {/* 
        
        
        
        
        
        
        
        
        
        */}
        <Slide className="collapse-columns">
          <Subtitle>Role-based Access Control</Subtitle>
          <Columns className="align-top">
            <div>
              <Text>User</Text>
              <img className="icon" src={IconUser} alt="" />
            </div>
            <div>
              <Text>Role</Text>
              <img className="icon" src={IconRole} alt="" />
            </div>
            <div>
              <Text>Permission</Text>
              <img className="icon" src={IconPermission} alt="" />
            </div>
          </Columns>
        </Slide>
        <Slide className="collapse-columns">
          <Subtitle>Role-based Access Control</Subtitle>
          <Columns className="align-top">
            <div>
              <Text>User</Text>
              <img className="icon" src={IconUser} alt="" />
              <Text>Sarah</Text>
            </div>
            <div>
              <Text>Role</Text>
              <img className="icon" src={IconRole} alt="" />
              <Text>Senior Partner</Text>
            </div>
            <div>
              <Text>Permission</Text>
              <img className="icon" src={IconPermission} alt="" />
              <Text>associates:terminate</Text>
            </div>
          </Columns>
        </Slide>
        <Slide className="highlight">
          <Title>Comparison</Title>
          <Columns className="align-top smaller">
            <div>
              <Subtitle>ABAC</Subtitle>
              <List>
                <li>Powerful</li>
                <li>Complex</li>
                <li>Fine-grain</li>
              </List>
            </div>
            <div>
              <Subtitle>RBAC</Subtitle>
              <List>
                <li>Simple</li>
                <li>Fast</li>
                <li>Coarse-grained</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide>
          <Subtitle>
            So <Highlight>which</Highlight> should you use?
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            So <Highlight>which</Highlight> should you use?
          </Subtitle>
          <Text>Both!</Text>
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Text>
                Start with <Highlight>RBAC</Highlight>
              </Text>
            </div>
            <div>
              <Text>&nbsp;</Text>
            </div>
          </Columns>
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Text>
                Start with <Highlight>RBAC</Highlight>
              </Text>
            </div>
            <div>
              <Text>
                Add <Highlight>ABAC</Highlight> where needed
              </Text>
            </div>
          </Columns>
        </Slide>
        <Slide className="highlight">
          <Title>Demo Time!</Title>
        </Slide>
        <Slide>
          <Text>
            Let's create a <Highlight>Gatsby</Highlight> frontend
          </Text>
          <Code
            code={`gatsby new frontend
cd frontend
npm i @auth0/auth0-react`}
            lang="javascript"
          />
        </Slide>
        <Slide>
          <Text>
            Wrap the app with <Highlight>Auth0Provider</Highlight>
          </Text>
          <Code
            code={`import { Auth0Provider } from "@auth0/auth0-react"

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain=...
      clientId=...
      audience=...
      redirectUri=...
      onRedirectCallback=...
    >
      {element}
    </Auth0Provider>
  )
}`}
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Text>
            Create an Admin page protected by <Highlight>withAuthenticationRequired()</Highlight>
          </Text>
          <Code
            code={`import { withAuthenticationRequired } from "@auth0/auth0-react"


const AdminPage = () => {
  return (
    ...
  )
}

export default withAuthenticationRequired(AdminPage)`}
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Text>Add JWT capabilities to a Node.js Express API</Text>
          <Code
            code={
              `const jwt = require("express-jwt");
const jwks = require("jwks-rsa");              

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH0_ISSUER + ".well-known/jwks.json",
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ["RS256"],
});`
            }
            lang="javascript"
          />
        </Slide>
        <Slide>
          <Text>Add Authz capabilities</Text>
          <Code
            code={`const jwtAuthz = require("express-jwt-authz");

const checkPermissions = (permissions) => {
  return jwtAuthz([permissions], {
    customScopeKey: "permissions",
    checkAllScopes: true,
    failWithError: true,
  });
};`}
            lang="javascript"
          />
        </Slide>
        <Slide>
          <Text>Lock endpoints to permissions</Text>
          <Code
            code={`app.use(jwtCheck);

app.post("/items/",
  checkPermissions("create:items"),
  async (req, res) => {
    ...`}
            lang="jsx"
          />
        </Slide>
        <Slide className="highlight">
          <Browser url="http://localhost:8000" />
        </Slide>
        {/* 
        
        
        
        
        
        
        
        
        
        */}
        <Slide>
          <Columns>
            <div>
              <Image src={Ben} alt="A picture of me" full color="#bbbb99" />
            </div>
            <div>
              <Subtitle>
                Thank You{" "}
                <span role="img" aria-label="green heart">
                  💚
                </span>
              </Subtitle>
              <List className="smaller">
                <li>
                  <span role="img" aria-label="bird">
                    🐦
                  </span>{" "}
                  @bendechrai
                </li>
                <li>
                  <span role="img" aria-label="shopping">
                    🛍️
                  </span>{" "}
                  https://github.com/bendechrai/ye-olde-shoppe/
                </li>
                <li>
                  <span role="img" aria-label="t-shirt">
                    👕
                  </span>{" "}
                  https://a0.to/apidays-tshirt
                </li>
              </List>
            </div>
          </Columns>
        </Slide>
      </Deck>
    )
  }
}

export default App

export default function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <h1>About</h1>
        </div>

        <div className="about-content-wrapper">
          <div className="about-content">
            <p>
              {" "}
              I have learned so much from this course, including a ground-level
              understanding HTML, CSS, Vanilla JS, and React. Each of these
              topics has a lot to go into, but I feel like I have a good
              understanding of the proper use cases for each of them. I have
              learned about create-react-app, and proper folder/file structure,
              including proper naming functions of components, files, and
              folders.
              <br />
              <br />
              My capstone incorporates login/logout functionality and user
              authentication from an outside API.
              <br />
              <br />
              I have added 5 different components that I find somewhat useful.
              Included is a box-shadow generator which allows the user use
              sliders to create a mock box-shadow. This outputs a line of code
              that they can copy/paste into their css.
              <br />
              <br />
              Next, is a coin flipping component which uses a pseudo random
              number generator to determine the output of a coin flip.
              <br />
              <br />
              Similar to the coin flip, I have created a dice rolling component
              which uses similar functionality to generate the output of 2 dice,
              along with using Asynchronous JS to animate the rolling of the
              dice.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

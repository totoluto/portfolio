import ArticleImageComponent from "../../Components/ArticleImageComponent";
import "./PostStyle.css";
import endpointBertrandFigure from "../../Images/Posts/endpoint-bertrand-figure.jpg";
import radiusBertrandFigure from "../../Images/Posts/radius-bertrand-figure.jpg";
import midpointBertrandFigure from "../../Images/Posts/midpoint-bertrand-figure.jpg";
import applicationScreen from "../../Images/Posts/bertrand-application.jpg";
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';

function BertrandParadox() {
    return (
        <div className={"site"}>
            <article className={"article"}>
                <h1 className={"title"}>Simulating Bertrand's Paradox with JavaFX: A Journey into Probability Theory</h1>
                <h2 className={"subtitle"}>January 2023</h2>
                <section className={"articleInfo"}>
                    Bertrand's Paradox is a classic problem in probability theory that questions the definition of randomness. It asks: "What is the probability that a randomly chosen chord in a circle is longer than the side of an inscribed equilateral triangle?" Interestingly, depending on the method used to select the chord, the probability can vary, leading to different interpretations and solutions.
                </section>
                <main className={"articleContent"}>
                    <section className={"fullWidth"}>
                        <h2 className={"chapterTitle"}>Motivation</h2>
                        <p>
                            As part of my education, I needed to complete an exercise using JavaFX. I wanted to choose a project that would not only help me practice JavaFX but also deepen my understanding of any mathematical concept. While searching for a suitable problem, I came across Bertrand's Paradox.
                        </p>
                        <p>
                            It presents a challenge in probability theory. Bertrand’s Paradox demonstrates how different methods of defining "randomness" can lead to varying probabilities for the same question.
                        </p>
                        <p>
                            By implementing a simulation of this paradox, I was able to improve my programming skills, particularly in JavaFX, while also gaining a deeper appreciation for the complexities of probability theory. This project allowed me to visualize mathematical concepts dynamically, reinforcing both my coding abilities and my mathematical intuition.
                        </p>
                    </section>
                    <section className={"fullWidth"}>
                        <h2 className={"chapterTitle"}>Introduction</h2>
                        <p>
                            Bertrand's Paradox is a famous problem in probability theory that challenges our understanding of randomness. It explores the probability of a randomly selected chord in a circle being longer than the side of an inscribed equilateral triangle. What makes this paradox fascinating is that the solution can vary depending on how the chord is chosen, highlighting the ambiguity in the definition of "random."
                        </p>
                        <ul>
                            <li><b>Random Endpoints Method:</b><br />Two random points are selected independently on the circumference of the circle, and a chord is drawn between them.</li>
                            <li><b>Random Radius Method:</b><br />A radius is drawn at a random angle, and a point is chosen randomly along this radius. A perpendicular chord is then drawn through this point.</li>
                            <li><b>Random Midpoint Method:</b><br />A point inside the circle is chosen randomly to be the midpoint of the chord, and the chord is drawn through this point.</li>
                        </ul>
                        <p>
                            Each of these methods leads to a different probability of the chord being longer than the side of the inscribed equilateral triangle, making Bertrand's Paradox a fascinating example of how varying definitions of randomness can yield different results.
                        </p>
                    </section>
                    <section className={"halfWidth"}>
                        <h2 className={"chapterTitle"}>Random Endpoints Method</h2>
                        <p>
                            The Random Endpoints Method involves selecting two random points on the circumference of a circle and connecting them to form a chord. To understand the probability of the chord being longer than the side of an inscribed equilateral triangle, we need to delve into the geometry and the mathematical process behind the method.
                        </p>
                        <br/>
                        <p>
                            The circle can be described using polar coordinates, where any point on the circumference is given by the angle <Latex>{"$\\theta$"}</Latex>. We can use the angle to describe the position of each point. The length of the chord will depend on the central angle <Latex>{"$\\Delta \\theta$"}</Latex> between the two points.
                        </p>
                        <br/>
                        <p>
                            The first point is located at an angle <Latex>{"$\\theta_1$"}</Latex> on the circle.<br/>
                            The second point is located at an angle <Latex>{"$\\theta_2$"}</Latex> on the circle.<br/>
                            Since the points are chosen randomly, the angle <Latex>{"$\\Delta \\theta = |\\theta_2 - \\theta_1|$"}</Latex> is the key factor that determines the length of the chord.
                        </p>
                        <br/>
                    </section>
                    <section className={"halfWidth centerImage"}>
                        <ArticleImageComponent height={"60%"} image={endpointBertrandFigure} source={"https://en.wikipedia.org/wiki/Bertrand_paradox_(probability)"} />
                    </section>
                    <section className={"fullWidth"}>
                        <p>
                            The length of the chord can be derived using the law of cosines in the triangle formed by the center of the circle and the two endpoints of the chord. The length of the chord <Latex>{"$L$"}</Latex> is given by:<br/>
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$L = 2r \\sin\\left(\\frac{\\Delta\\theta}{2}\\right)$"}</Latex>
                        </p>
                        <p>
                            Where:
                            <ul>
                                <li><Latex>{"$r$"}</Latex> is the radius of the circle</li>
                                <li><Latex>{"$\\Delta\\theta$"}</Latex> is the central angle between the two points</li>
                            </ul>
                            For the chord to be longer than the side of the inscribed equilateral triangle, its length <Latex>{'$L$'}</Latex> must be greater than the side length of the triangle, which is also <Latex>{'$r$'}</Latex>. Therefore, we need:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$2r \\sin\\left(\\frac{\\Delta \\theta}{2}\\right) > r\\sqrt{3}$"}</Latex>
                        </p>
                        <p>
                            Dividing both sides by <Latex>{"$r$"}</Latex>:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$2 \\sin\\left(\\frac{\\Delta \\theta}{2}\\right) > \\sqrt{3}$"}</Latex>
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$\\sin\\left(\\frac{\\Delta \\theta}{2}\\right) > \\frac{\\sqrt{3}}{2}$"}</Latex>
                        </p>
                        <p>
                            Since <Latex>{"$\\frac{\\Delta \\theta}{2} > 60^\\circ$"}</Latex>, we get:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$\\frac{\\Delta \\theta}{2} > 60^\\circ$"}</Latex>
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$\\Delta \\theta > 120^\\circ$"}</Latex>
                        </p>
                        <p>
                            Since <Latex>{"$\\Delta \\theta$"}</Latex> is chosen randomly from <Latex>{"$0^\\circ$"}</Latex> to <Latex>{"$180^\\circ$"}</Latex> (because angles larger than <Latex>{"$180^\\circ$"}</Latex> correspond to their supplements), the probability is given by:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$P(\\Delta \\theta > 120^\\circ) = \\frac{180^\\circ - 120^\\circ}{180^\\circ} = \\frac{60}{180} = \\frac{1}{3}$"}</Latex>
                        </p>
                        <p>
                            Thus, the probability that a randomly chosen chord using the Random Endpoints Method is longer than the side of the inscribed equilateral triangle is <Latex>{"$\\frac{1}{3}$"}</Latex>.
                        </p>
                    </section>
                    <section className={"fullWidth"}>
                        <h2 className={"chapterTitle"}>Midpoint Method</h2>
                        <p>
                            The Midpoint Method involves selecting a random point inside the circle and then drawing a chord whose midpoint is the selected point. To calculate the probability of the chord being longer than the side of an inscribed equilateral triangle, we need to examine the geometry and the relationship between the distance of the midpoint from the center of the circle and the length of the chord.
                        </p>
                        <br/>
                        <p>
                            The circle is again described using polar coordinates. The radius of the circle is <Latex>{"$r$"}</Latex>, and we denote the radial distance from the center of the circle to the midpoint of the chord as <Latex>{"$d$"}</Latex>. The key idea is that the length of the chord depends on the distance of the midpoint from the center of the circle.
                        </p>
                        <br/>
                        <p>
                            The length of the chord <Latex>{"$L$"}</Latex> can be derived using the Pythagorean theorem in the right triangle formed by the radius, the distance of the midpoint, and half of the length of the chord. The length of the chord is:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$L = 2 \\sqrt{r^2 - d^2}$"}</Latex>
                        </p>
                    </section>
                    <section className={"halfWidth"}>
                        <p>
                            For the chord to be longer than the side of the inscribed equilateral triangle, its length <Latex>{"$L$"}</Latex> must be greater than <Latex>{"$r$"}</Latex>. Therefore, we need:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$2 \\sqrt{r^2 - d^2} > r$"}</Latex>
                        </p>
                        <p>
                            Squaring both sides:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$4(r^2 - d^2) > r^2$"}</Latex>
                        </p>
                        <p>
                            Simplifying:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$3r^2 > 4d^2$"}</Latex>
                        </p>
                        <p>
                            Dividing both sides by <Latex>{"$r^2$"}</Latex>:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$3 > 4\\frac{d^2}{r^2}$"}</Latex>
                        </p>
                        <p>
                            The inequality shows that for the chord to be longer than the side of the inscribed equilateral triangle, the distance <Latex>{"$d$"}</Latex> must satisfy:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$d < \\frac{r}{2}$"}</Latex>
                        </p>
                        <p>
                            Since the point is randomly chosen, the probability of <Latex>{"$d$"}</Latex> being less than <Latex>{"$\\frac{r}{2}$"}</Latex> corresponds to the area of a circle with radius <Latex>{"$\\frac{r}{2}$"}</Latex> inside the original circle. The probability is given by:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$P(d < \\frac{r}{2}) = \\frac{\\pi (\\frac{r}{2})^2}{\\pi r^2} = \\frac{1}{4}$"}</Latex>
                        </p>
                        <p>
                            Thus, the probability that a randomly chosen chord using the Midpoint Method is longer than the side of the inscribed equilateral triangle is <Latex>{"$\\frac{1}{4}$"}</Latex>.
                        </p>
                    </section>
                    <section className={"halfWidth centerImage"}>
                        <ArticleImageComponent height={"60%"} image={midpointBertrandFigure} source={"https://en.wikipedia.org/wiki/Bertrand_paradox_(probability)"} />
                    </section>
                    <section className={"fullWidth"}>
                        <h2 className={"chapterTitle"}>Radius Method</h2>
                        <p>
                            The Radius Method involves selecting a random radius from the center of the circle, and then drawing a chord perpendicular to the radius. The length of the chord depends on how far the point of intersection is from the center of the circle. We will explore the probability of the chord being longer than the side of the inscribed equilateral triangle based on this method.
                        </p>
                        <br/>
                        <p>
                            To describe the setup, we consider the perpendicular distance from the center of the circle to the chord, denoted as <Latex>{"$d$"}</Latex>. The key geometric relation is that the length of the chord depends on this perpendicular distance.
                        </p>
                        <br/>
                        <p>
                            Using the Pythagorean theorem in the right triangle formed by the radius, the perpendicular distance from the center to the chord, and half of the chord's length, we can express the length of the chord <Latex>{"$L$"}</Latex> as:
                        </p>
                    </section>
                    <section className={"halfWidth"}>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$L = 2 \\sqrt{r^2 - d^2}$"}</Latex>
                        </p>
                        <p>
                            For the chord to be longer than the side of the inscribed equilateral triangle, we require:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$2 \\sqrt{r^2 - d^2} > r$"}</Latex>
                        </p>
                        <p>
                            Squaring both sides:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$4(r^2 - d^2) > r^2$"}</Latex>
                        </p>
                        <p>
                            Simplifying:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$3r^2 > 4d^2$"}</Latex>
                        </p>
                        <p>
                            Dividing both sides by <Latex>{"$r^2$"}</Latex>:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$3 > 4\\frac{d^2}{r^2}$"}</Latex>
                        </p>
                        <p>
                            The inequality shows that for the chord to be longer than the side of the inscribed equilateral triangle, the perpendicular distance <Latex>{"$d$"}</Latex> must satisfy:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$d < \\frac{r}{2}$"}</Latex>
                        </p>
                        <p>
                            Since <Latex>{"$d$"}</Latex> is chosen randomly from 0 to <Latex>{"$r$"}</Latex>, the probability of <Latex>{"$d$"}</Latex> being less than <Latex>{"$\\frac{r}{2}$"}</Latex> corresponds to the fraction of the area where this condition holds. The probability is given by:
                        </p>
                        <p className={"textAlignCenter equation"}>
                            <Latex>{"$P(d < \\frac{r}{2}) = \\frac{\\frac{r}{2}}{r} = \\frac{1}{2}$"}</Latex>
                        </p>
                        <p>
                            Thus, the probability that a randomly chosen chord using the Radius Method is longer than the side of the inscribed equilateral triangle is <Latex>{"$\\frac{1}{2}$"}</Latex>.
                        </p>
                    </section>
                    <section className={"halfWidth centerImage"}>
                        <ArticleImageComponent height={"60%"} image={radiusBertrandFigure} source={"https://en.wikipedia.org/wiki/Bertrand_paradox_(probability)"} />
                    </section>
                    <section className={"halfWidth centerImage"}>
                        <ArticleImageComponent width={"90%"} image={applicationScreen} source={"https://github.com/totoluto/bertrand-Paradox"} />
                    </section>
                    <section className={"halfWidth"}>
                        <h2 className={"chapterTitle"}>Application</h2>
                        <p>
                            The application is a Simulation of the Bertrand Paradox. The simulation allows the user to choose the method used to select the chord, the number of iterations, and the delay between the drawing. It allows the user to visualize the probability of the chord being longer than the side of the inscribed equilateral triangle.
                        </p>
                        <p>
                            After Starting the Algorithm, the lines will be generated and the probability will be calculated. Lines longer than the side of the inscribed equilateral triangle will be colored red, while the shorter ones will be colored blue.
                        </p>
                        <br/>
                        <p>
                            The application is available on <a href={"https://github.com/totoluto/bertrand-Paradox"} rel="noreferrer" target={"_blank"}>GitHub</a>.
                            <br/>
                            It was developed using JavaFX and Java and can easily be launched in an IDE file as a Java Application.
                            <br/>
                            <br/>
                            <b>Note:</b> The application is not optimized for performance and uses an old version of JDK (v15.0.1).
                        </p>
                    </section>
                </main>
            </article>
        </div>
    );
}

export default BertrandParadox;
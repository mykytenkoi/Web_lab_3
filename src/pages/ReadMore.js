import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

import '../style.css';

const ReadMore = () => {
    const [addComment, setComment] = useState(false);
    const history = useHistory();

    const handleRedirect = (url) => () => {
        if(url) {
        history.push(url);
        }
    }
    
    const handleCheckComment = () => {
        setComment(true);
    }

    const handlePutComment = () => {
        return(
            <div className="text-block">
                <p className="read-text">@John_Bob</p>
                <p className="comment-text">Woof! Woof!</p>
            </div>
        )
    }

    return(
        <>
        <header>
        <div className="navbar">
          <div className="container-header nav-container">
            <h1 className="navbar-title">Urban blog</h1>
            <div className="navbar-links">
              <div className="navbar-links-pages">
                <button onClick={handleRedirect('/')} className="link">Home</button>
                <button onClick={handleRedirect('/ideas')} className="link">Ideas</button>
                <button onClick={handleRedirect('/problems')} className="link">Problems</button>
              </div>
              <div>
                <button className="link" onClick={handleRedirect('/signin')}>Sign in</button>
                <button onClick={handleRedirect('/signup')} className="link link-sign-up">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
          <div className="main-container">
            <div className="read-card">
                <div className="card-image full-width"></div>
                <h1 className="read-title">Broken windows theory</h1>
                <p className="read-text">In 1982, James Wilson and George Kelling formulated a theory according to which if someone broke the glass in a house and no one inserted a new one, then soon not a single whole window would remain in that house, and then looting would begin. In other words, clear signs of disorder and non-compliance by people with accepted norms of behavior provoke others to forget about the rules too. As a result of the resulting chain reaction, a "decent" urban area can quickly turn into a cloaca, where people are afraid to go out.
                    <br/><br/>Sociologists at the University of Groningen (Netherlands) conducted six experiments to test the truth of the theory of broken windows.</p>
                <p className="subtitle">Experiment 1</p>
                <p className="read-text">The first experiment was carried out on a street with many shops, near the wall of a house, where Groningen people who come to shop park their bicycles. There was a bright, conspicuous sign against this wall, prohibiting painting on the walls. At first, the wall was clean. The experimenters hung a piece of paper on the handlebars of each bicycle (there were 77 bicycles in total) with the words "We wish you all happy holidays!" and the logo of a defunct sporting goods store. Hiding in a secluded corner, the researchers began to observe the actions of cyclists. There were no trash bins on the street, so a person could either throw a piece of paper on the ground, or hang it on another bicycle, or take it with him to throw it away later. The first two options were considered as a violation of the accepted norms, the third as their observance.
                    <br/><br/>Out of 77 cyclists, only 25 (33%) behaved uncivilized. Then the experiment was repeated, in the same weather and at the same time of the day, after having painted the wall with empty drawings. This time, 53 people out of 77 (69%) littered. The revealed difference has a high degree of statistical significance. Thus, violating the ban on painting on walls has proven to be a serious incentive for people to break another generally accepted rule - not litter on the streets.</p>
                <p className="subtitle">Experiment 2</p>
                <p className="read-text">The second experiment was to show whether the theory of broken windows is valid only for generally accepted norms, or whether it also applies to local rules established for a particular situation or place. The researchers blocked the main entrance to the car park with a fence, in which, however, a wide gap was left. Next to it they hung a sign "No entry, bypass 200 m to the right", as well as a notice "It is forbidden to fasten bicycles to the fence." The experiment was again carried out in two versions: "the order is observed" and "the order is violated." In the first case, four bicycles were standing a meter away from the fence, clearly not fastened to it. In the second case, the same bicycles were fastened to the fence. From a secluded place, the experimenters observed how citizens who came for their cars would behave: they would go around the fence or crawl through a hole. The result turned out to be positive: in the situation "the order is observed" only 27% of car owners crawled through the hole, and in the situation "the order was violated" - 82%</p>
                <p className="subtitle">Experiment 3</p>
                <p className="read-text">The third experiment was carried out in an underground supermarket parking lot with a large, highly visible notice “Please return shopping carts taken from the store”. In the situation "the order was observed" there were no carts in the parking lot, in the situation "the order was violated" there were four carts. The researchers prudently smeared their pens with fuel oil so that the visitors would not have a desire to use them. The same pieces of paper were attached to the machines as in the first experiment. The result was similar: in the first situation, 30% of drivers threw a piece of paper on the ground, in the second - 58%.</p>
                <p className="subtitle">Experiment 4</p>
                <p className="read-text">The fourth experiment resembled the first, with the difference that the signs of “violation of norms by other people” were now not visual, but sound. In the Netherlands, the use of firecrackers and fireworks on New Year's Eve is prohibited by law. It turned out that cyclists are much more likely to throw pieces of paper on the ground if they hear the sound of exploding firecrackers.</p>
                <p className="subtitle">Experiments 5 and 6</p>
                <p className="read-text">In the fifth and sixth experiments, people were provoked to petty theft. An envelope with a transparent window was sticking out of the mailbox, from which a 5 euro note was clearly visible. The experimenters watched people passing by, counting the number of thefts. In a “good order” situation, the mailbox was clean and there was no garbage around. In a “out of order” situation, either the box was painted with meaningless graffiti (experiment 5), or rubbish was lying around (experiment 6).
                    <br/><br/>In the situation "the order is observed" only 13% of passers-by (out of 71) took the envelope. However, 27% of passers-by (out of 60) stole an envelope from a painted box, and scattered garbage provoked 25% of people to steal (out of 72).</p>
            </div>
            <div className="text-block">
                <p className="read-text">Share your opinion in the comments</p>
                <textarea className="textarea"></textarea>
                <button className="input-sign sign-button comment" onClick={handleCheckComment}>Comment</button>
            </div>
            <div className="text-block">
                <p className="read-text">@John_Bob</p>
                <p className="comment-text">Woof! Woof!</p>
            </div>
          </div>
      </main>
      </>
    )
};

export default ReadMore;
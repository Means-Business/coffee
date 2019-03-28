import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              repellendus, adipisci fuga voluptatibus quasi aut eum omnis
              laborum veniam vitae, et officia delectus obcaecati esse nobis
              doloremque magni error numquam laboriosam, nemo consectetur
              repudiandae quod ipsum. Suscipit tempore assumenda architecto
              dicta repudiandae, necessitatibus, praesentium ea esse perferendis
              quasi itaque ipsum!
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState, FC } from "react";
import $ from "jquery";
import * as bootstrap from "bootstrap";
import "jquery-ui-dist/jquery-ui";

const Dialog = () => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    $("#colap").on("click", function () {
      var ce = $("#collapseExample");
      var c = new bootstrap.Collapse(ce as any);
      c.toggle();
    });

    $("#dialog").dialog({
      autoOpen: false,
      buttons: {
        OK: function () {
          $(this).dialog("close");
        },
        Cancel: function () {
          $(this).dialog("close");
        },
      },
    });
    $("#dg").on("click", function () {
      $("#dialog").dialog("open");
    });
    setState((prev) => {
      return !prev;
    });
  }, []);

  return (
    <>
      <div id="dialog">
        <p>I'm a Dialog</p>
      </div>
      <button id="dg" className="btn btn-primary" type="button">
        click
      </button>

      <form>
        <input type="text" id="datepicker" />
      </form>
      <hr />

      <p>
        <button
          id="colap"
          className="btn btn-primary"
          type="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          title="Button collapse"
        >
          Button with data-bs-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </>
  );
};

export default Dialog

package controllers;

import com.google.inject.Inject;

import play.api.Configuration;
import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller {

	@Inject
	Configuration config;

	public Result dashboards() {
		return ok(views.html.dashboards.render(config));
	}

}
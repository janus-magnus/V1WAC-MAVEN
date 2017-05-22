package nl.hu.v1wac.firstapp.webservices;


import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import nl.hu.v1wac.firstapp.model.Country;
import nl.hu.v1wac.firstapp.model.WorldService;

@Path("/countries")
public class WorldResource {
	private WorldService ws = new WorldService();

	@GET
	@Produces("application/json")
	public String getCountries() {

		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (Country c : ws.getAllCountries()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("code", c.getCode()).add("iso3", c.getIso3Code()).add("name", c.getName())
					.add("continent", c.getContinent()).add("capital", c.getCapital()).add("region", c.getRegion())
					.add("surface", c.getSurface()).add("population", c.getPopulation())
					.add("goverment", c.getGovernment()).add("lat", c.getLatitude()).add("lng", c.getLongitude());
			jab.add(job);

		}

		return jab.build().toString();
	}

	@GET
	@Path("{code}")
	@Produces("application/json")
	public String getCountryByCode(@PathParam("code") String code) {

		JsonObjectBuilder job = Json.createObjectBuilder();

		Country c = ws.getCountryByCode(code);
		job.add("code", c.getCode()).add("iso3", c.getIso3Code()).add("name", c.getName())
				.add("continent", c.getContinent()).add("capital", c.getCapital()).add("region", c.getRegion())
				.add("surface", c.getSurface()).add("population", c.getPopulation()).add("goverment", c.getGovernment())
				.add("lat", c.getLatitude()).add("lng", c.getLongitude());

		return job.build().toString();
	}

	@GET
	@Path("/largesturfaces")
	@Produces("application/json")
	public String getCountriesBy10LargestSurfaces() {

		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (Country c : ws.get10LargestSurfaces()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("code", c.getCode()).add("iso3", c.getIso3Code()).add("name", c.getName())
					.add("continent", c.getContinent()).add("capital", c.getCapital()).add("region", c.getRegion())
					.add("surface", c.getSurface()).add("population", c.getPopulation())
					.add("goverment", c.getGovernment()).add("lat", c.getLatitude()).add("lng", c.getLongitude());
			jab.add(job);

		}

		return jab.build().toString();
	}

	@GET
	@Path("/largestpopulations")
	@Produces("application/json")
	public String getCountriesByLargestPopulation() {

		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (Country c : ws.get10LargestPopulations()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("code", c.getCode()).add("iso3", c.getIso3Code()).add("name", c.getName())
					.add("continent", c.getContinent()).add("capital", c.getCapital()).add("region", c.getRegion())
					.add("surface", c.getSurface()).add("population", c.getPopulation())
					.add("goverment", c.getGovernment()).add("lat", c.getLatitude()).add("lng", c.getLongitude());
			jab.add(job);

		}

		return jab.build().toString();
	}

}

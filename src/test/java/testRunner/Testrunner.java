package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions

(
		features = "src/test/java/feature",
	    glue = {"stepDefinition","util"},
		tags ={"@TestCase1,@TestCase2,@TestCase3"},
		dryRun = true,
	    monochrome = true,
		plugin = {"pretty","junit:target/reports/jreport.xml"}
				
		)

public class Testrunner {
	

}

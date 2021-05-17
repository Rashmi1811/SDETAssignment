package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.Hooks;



   
public class stepDefinition {
	
	WebDriver driver = Hooks.driver;
	
	@Given("^User in on Upskill HomePage$")
	public void user_in_on_Upskill_HomePage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.get("http://elearningm1.upskills.in/");
		
	}

	@When("^User clicks on Sign up!$")
	public void user_clicks_on_Sign_up() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Sign up!")).click();
		
	   
	}

	@Then("^Registration form should be displayed$")
	public void registration_form_should_be_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("step 3");
	}

	
	
	@When("^User enters  \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_enters(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.name("firstname")).sendKeys(arg1);
		driver.findElement(By.name("lastname")).sendKeys(arg2);
		driver.findElement(By.name("email")).sendKeys(arg3);
		driver.findElement(By.name("username")).sendKeys(arg4);
		driver.findElement(By.name("pass1")).sendKeys(arg5);
		driver.findElement(By.name("pass2")).sendKeys(arg6);
		
		
	}

	@When("^Clicks on Register$")
	public void clicks_on_Register() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("submit")).click();
	   
	}

	@Then("^User should be successfully registered\\.$")
	public void user_should_be_successfully_registered() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("step 4");
	}
	
	@When("^User enters  \"([^\"]*)\",  \"([^\"]*)\"$")
	public void user_enters(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		Thread.sleep(2000);
		driver.findElement(By.name("login")).sendKeys(arg1);
		driver.findElement(By.name("password")).sendKeys(arg2);
		
	    
	}

	@When("^Clicks on Login$")
	public void clicks_on_Login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("form-login_submitAuth")).click();
		Thread.sleep(2000);
	}

	@Then("^User should be successfully Logged in$")
	public void user_should_be_successfully_Logged_in() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		/*if(driver.getCurrentUrl().equalsIgnoreCase(
			      "http://elearningm1.upskills.in/user_portal.php")){
			         System.out.println("Test Pass"); 
			      } else { 
			         System.out.println("Test Failed"); 
			      } */
	
		
		Boolean v= driver.getPageSource().contains("Rashmi Pal");
				if (v= true){
					System.out.println("Test Pass"); 
			      } else { 
			         System.out.println("Test Failed"); 		
				}
		driver.findElement(By.xpath("/html/body/main/header/nav/div/div[2]/ul[2]/li[2]/a")).click();
		String user = driver.findElement(By.xpath("/html/body/main/header/nav/div/div[2]/ul[2]/li[2]/ul/li[1]/div/a/p")).getText();
		if (user.equalsIgnoreCase("Rashmi Pal"))
		{System.out.println("Test Pass"); 
	      } 
		else {System.out.println(user); }
		
		
	}
	
	
	@When("^User Clicks on inbox$")
	public void user_Clicks_on_inbox() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Inbox")).click();
	}

	@When("^Clicks on Compose$")
	public void clicks_on_Compose() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("/html/body/main/section/div/div[2]/div/div/div[2]/div[1]/div/div[1]/a[1]/img")).click();
	}

	@Then("^A new window for composing message is dispayed$")
	public void a_new_window_for_composing_message_is_dispayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   String s = driver.findElement(By.xpath("//*[@class='active']")).getText();
	    System.out.println(s);
	}

	
	
	
	@When("^User enter \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_enter(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement sendTo = driver.findElement(By.xpath("//input[@class='select2-search__field']"));
		sendTo.sendKeys(arg1);
		Thread.sleep(2000);
		sendTo.sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		sendTo.sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.id("compose_message_title")).sendKeys(arg2);
	}

	

	@When("^Clicks on Send message$")
	public void clicks_on_Send_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[contains(text(),' Send message')]")).click();
		driver.findElement(By.xpath("//*[contains(text(),' Send message')]")).sendKeys(Keys.ENTER);
		System.out.println("Message sent");
	}

	@Then("^Message should be sent successfully$")
	public void message_should_be_sent_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String s2 = driver.findElement(By.xpath("//*[contains(text(),'The message has been sent to')]")).getText();
		System.out.println(s2);
		
	}	
		
	
}

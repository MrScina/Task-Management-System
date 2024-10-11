using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task_Management_API.Contextdata;
using Task_Management_API.Models;

namespace Task_Management_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private AppDbContext _TaskContext;
        public TasksController(AppDbContext taskContext)
        {
            _TaskContext = taskContext;
        }
        [HttpGet("getSearchedItems")]
        public async Task<IActionResult> getSearchedItems(string query)
        {

            try
            {
                var searchedItems = await _TaskContext.tasks.Where(x => x.Status.Contains(query)
                                                                  ||  x.Tittle.Contains(query)).ToListAsync();

                return Ok(searchedItems);

            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpGet]
        public async Task<IActionResult> getallTasks()
        {

            try
            {
                var alltask = await _TaskContext.tasks.OrderByDescending(x=>x.Status).ToListAsync();

                return Ok(alltask);

            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpPost("addTask")]

        public async Task<IActionResult> addTask([FromBody] Tasks task)
        {

            try
            {
                if (!String.IsNullOrEmpty(task.Status))
                {
                    task.id = Guid.NewGuid();
                    await _TaskContext.tasks.AddAsync(task);
                    await _TaskContext.SaveChangesAsync();

                    return Ok(task);
                }
                return Ok(task);


            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpGet("getTaskById/{id:Guid}")]
        public async Task<IActionResult> getTaskById([FromRoute] Guid id)
        {
      //here we getting the task by id
            try
            {

                var Task = await _TaskContext.tasks.FirstOrDefaultAsync(x => x.id == id);
                if (Task == null)
                {
                    return NotFound();
                }
                return Ok(Task);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpPut("editTask/{id:Guid}")]
        public async Task<IActionResult> editTask([FromRoute] Guid id, Tasks UpdateRequest)
        {
      //we edit the item here
            try
            {

                var item = await _TaskContext.tasks.FindAsync(id);
                if (item == null)
                {
                    return NotFound();
                }
                item.Tittle = UpdateRequest.Tittle;
                item.Description = UpdateRequest.Description;
                item.Status = UpdateRequest.Status;

                await _TaskContext.SaveChangesAsync();

                return Ok(item);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> deleteTasks([FromRoute]Guid id)
        {
            try
            {
        var testubf = "meeeee";
                var employee = await _TaskContext.tasks.FindAsync(id);

                if (employee == null)
                {
                    return BadRequest();
                }
                else
                {
                    _TaskContext.Remove(employee);
                    await _TaskContext.SaveChangesAsync();
          ///develoment branch
          ///
          //child branch
          //ui[op]ipu
                }
                return Ok(employee);
            }
            catch (Exception ex) 
            {
                throw;
            }
            

        }

    }
}

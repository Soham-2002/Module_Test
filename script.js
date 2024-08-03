let employees = [];
        let idCounter = 1;

        function addEmployee() {
            const name = document.getElementById('name').value;
            const profession = document.getElementById('profession').value;
            const age = document.getElementById('age').value;
            const message = document.getElementById('message');

            if (name === "" || profession === "" || age === "") {
                message.textContent = "Error: Please Make sure All the fields are filled before adding an employee!";
                message.className = "error";
                return;
            }

            const newEmployee = {
                id: idCounter++,
                name,
                profession,
                age: Number(age)
            };

            employees.push(newEmployee);
            message.textContent = "Success: Employee Added!";
            message.className = "success";
            displayEmployees();
        }

        function deleteEmployee(id) {
            employees = employees.filter(employee => employee.id !== id);
            displayEmployees();
        }

        function displayEmployees() {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = employees.length > 0
                ? employees.map(employee => `
          <div>
            <span>${employee.id}. Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}</span>
            <button onclick="deleteEmployee(${employee.id})">Delete User</button>
          </div>
        `).join('')
                : "<p>You have 0 Employees.</p>";
        }
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  companyDetails = {
    name: 'IBC Health Insurance CRM',
    history: `IBC started in 1995 with a vision to provide top-notch insurance services.
              We now serve millions of customers with diverse needs.`,
    revenue: 'Revenue: $1.5 Billion (2024)',
    compensation: 'Customer Compensation: $50 Million (2024)',
    mission: 'Our mission is to ensure a healthy, worry-free life for our clients.'
  };

  newsItems: string[] = [
    'IBC reaches 2 million customers milestone!',
    'Ranked #1 in customer satisfaction for 2024.',
    'Announces new policies for senior citizens with added benefits.'
  ];

  chartData = {
    labels: ['Compensation', 'Revenue'],
    datasets: [
      {
        data: [50, 1500],
        backgroundColor: ['#ffd700', '#007ad9'],
        hoverBackgroundColor: ['#ffec80', '#4daeff']
      }
    ]
  };

  chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    responsive: true
  };
}
